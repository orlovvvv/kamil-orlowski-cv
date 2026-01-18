import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const configs = {
    pl: {
        input: 'cv-pl.html',
        output: 'Kamil_Orlowski_CV_PL.pdf'
    },
    en: {
        input: 'cv-en.html',
        output: 'Kamil_Orlowski_CV_EN.pdf'
    }
};

async function generatePDF(lang) {
    const config = configs[lang];
    if (!config) {
        console.error(`Unknown language: ${lang}. Use 'pl' or 'en'.`);
        process.exit(1);
    }

    const inputPath = join(projectRoot, config.input);
    const pdfDir = join(projectRoot, 'pdf');
    const outputPath = join(pdfDir, config.output);

    if (!existsSync(pdfDir)) {
        mkdirSync(pdfDir, { recursive: true });
    }

    console.log(`Generating ${config.output}...`);

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();

        // Set viewport to match A4 width at 96 DPI
        await page.setViewport({
            width: 794,
            height: 1123,
            deviceScaleFactor: 1
        });

        await page.goto(`file://${inputPath}`, {
            waitUntil: 'networkidle0',
            timeout: 30000
        });

        await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            scale: 0.85,
            margin: {
                top: '10mm',
                right: '10mm',
                bottom: '10mm',
                left: '10mm'
            }
        });

        console.log(`Created: ${outputPath}`);
    } finally {
        await browser.close();
    }
}

async function main() {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        // Generate both PDFs
        await generatePDF('pl');
        await generatePDF('en');
    } else {
        // Generate specific language
        for (const lang of args) {
            await generatePDF(lang);
        }
    }

    console.log('PDF generation complete!');
}

main().catch((error) => {
    console.error('Error generating PDF:', error);
    process.exit(1);
});
