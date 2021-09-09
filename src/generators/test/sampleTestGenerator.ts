import { Project } from "ts-morph";
import * as path from 'path';
import * as fs from 'fs';
import * as hbs from "handlebars";

export function generateSampleTestFile(
    project: Project
  ) {
    const metadata = {}
    const file = fs.readFileSync(path.join(__dirname, "../static/sampleTest.ts.hbs"), {
      encoding: "utf-8"
    });
    const readmeFileContents = hbs.compile(file, { noEscape: true });
    project.createSourceFile("test/sampleTest.ts", readmeFileContents(metadata), {
      overwrite: true
    });
  }