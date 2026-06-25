import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile } from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const slug = formData.get("slug") as string;

  if (!file || !slug) {
    return NextResponse.json({ error: "Missing file or slug" }, { status: 400 });
  }

  // Save file to public/images/
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const ext = file.name.split(".").pop();
  const filename = `${slug}-${Date.now()}.${ext}`;
  const savePath = path.join(process.cwd(), "public", "images", filename);
  await writeFile(savePath, buffer);

  const mediaPath = `/images/${filename}`;

  // Update work-data.ts line by line — much more reliable than regex
  const dataPath = path.join(process.cwd(), "src", "lib", "work-data.ts");
  const source = await readFile(dataPath, "utf-8");
  const lines = source.split("\n");

  // Find the line index of this slug
  const slugLineIdx = lines.findIndex((l) => l.includes(`slug: "${slug}"`));
  if (slugLineIdx === -1) {
    return NextResponse.json({ error: "Slug not found" }, { status: 404 });
  }

  // Find the closing `},` of THIS entry (the first one after the slug line)
  let closingIdx = -1;
  for (let i = slugLineIdx + 1; i < lines.length; i++) {
    if (lines[i].trim() === "},") {
      closingIdx = i;
      break;
    }
  }

  if (closingIdx === -1) {
    return NextResponse.json({ error: "Could not find closing bracket" }, { status: 500 });
  }

  // Check if there's already a media array inside this entry
  const mediaLineIdx = lines.findIndex(
    (l, i) => i > slugLineIdx && i < closingIdx && l.includes("media: [")
  );

  if (mediaLineIdx !== -1) {
    // Find the closing ] of the media array
    let mediaCloseIdx = -1;
    for (let i = mediaLineIdx; i < closingIdx; i++) {
      if (lines[i].includes("]")) {
        mediaCloseIdx = i;
        break;
      }
    }
    if (mediaCloseIdx !== -1) {
      // Append before the closing ]
      lines[mediaCloseIdx] = lines[mediaCloseIdx].replace("]", `,\n    "${mediaPath}"\n  ]`);
    }
  } else {
    // Insert media array before the closing },
    lines.splice(closingIdx, 0, `    media: ["${mediaPath}"],`);
  }

  await writeFile(dataPath, lines.join("\n"), "utf-8");

  return NextResponse.json({ path: mediaPath });
}
