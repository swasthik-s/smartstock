# SmartStock

A mobile-first stocktaking PWA for barcode/PLU-based physical counts, product image lookup, immutable count records and iTrade reconciliation.

## Product scope

SmartStock is a stocktaking tool, not an inventory/ERP system.

- Import and refresh the iTrade Item Master.
- Preserve product image URLs across imports.
- Search by barcode, PLU or item description.
- Capture physical counts on iPhone, Android and desktop barcode scanners.
- Keep submitted count records append-only.
- Review and export stocktaking sessions and reconciliation reports.

## Architecture

- Next.js App Router + TypeScript
- Vercel deployment
- Supabase PostgreSQL for authenticated users, sessions and append-only count ledger
- Google Sheets / Excel as Item Master import and report-export formats
- PWA with offline count queue (implemented with explicit sync and conflict handling)

## Integrity model

A SHA-256 hash chain makes modifications detectable; it does not by itself make a database immutable. Production protections must also include database permissions/triggers, restricted service credentials, independent backups and externally stored session checkpoints.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

See the deployment and database setup guide as implementation is added. Never commit secrets or real employee/customer data.
