# WZN Production

Professionele portfolio- en bedrijfssite voor WZN Production.

## Projectgrens

Deze website staat bewust volledig in deze map:

```cmd
C:\Users\saton\Documents\New project\wzn-production
```

De bovenliggende map bevat ook andere projecten. Open, test en deploy daarom altijd de map `wzn-production` zelf. Kies bij Vercel dus niet de hoofdmap als project root.

Deze site hoort als **apart Vercel-project** live te staan. Gebruik dus niet je bestaande HBO-study project, geen bestaande HBO-study environment variables en geen bestaande HBO-study domeininstellingen.

## Lokaal testen via CMD

```cmd
cd "C:\Users\saton\Documents\New project\wzn-production"
npm install
npm run dev
```

Open daarna:

```cmd
http://localhost:3000
```

Productie-build testen:

```cmd
cd "C:\Users\saton\Documents\New project\wzn-production"
npm run build
npm run start
```

## Deploy naar Vercel als apart project

Beste optie: maak voor deze site een eigen GitHub repository, bijvoorbeeld `wzn-production`. Dan staat de website volledig los van je HBO-study repo en kan Vercel niets door elkaar halen.

1. Upload of push alleen deze map naar een eigen GitHub repository.
2. Ga naar Vercel en kies **Add New Project**.
3. Kies niet je bestaande HBO-study project en importeer geen bestaande HBO-study deploy opnieuw.
4. Selecteer de repository voor WZN Production.
5. Geef het Vercel-project een eigen naam, bijvoorbeeld `wzn-production`.
6. Als de repo alleen deze site bevat: laat **Root Directory** leeg of op `.` staan.
7. Als je toch vanuit deze grotere map/repo deployt: zet **Root Directory** exact op `wzn-production`.
8. Gebruik geen environment variables van je HBO-study project.
9. Vercel herkent Next.js automatisch.
10. Controleer build command: `npm run build`.
11. Deploy.
12. Koppel daarna je eigen domein via **Project Settings > Domains**.

Belangrijke Vercel-instelling:

```txt
Project Name: wzn-production
Framework Preset: Next.js
Build Command: npm run build
Output Directory: leeg laten
Install Command: npm install
Root Directory: .  (bij eigen repo)
Root Directory: wzn-production  (alleen als deze map in een grotere repo staat)
```

Niet doen:

- Niet deployen vanuit je HBO-study Vercel project.
- Niet dezelfde projectnaam gebruiken als je HBO-study project.
- Niet dezelfde root directory gebruiken als je HBO-study project.
- Niet de hoofdmap `C:\Users\saton\Documents\New project` als root kiezen wanneer daar meerdere projecten in staan.

## Belangrijke bestanden

- `src/app/page.tsx` - hoofdpage
- `src/app/components/` - losse websitecomponenten
- `src/app/lib/site-data.ts` - teksten, diensten, portfolio en prijzen
- `src/app/robots.ts` - genereert `/robots.txt`
- `src/app/sitemap.ts` - genereert `/sitemap.xml`
- `vercel.json` - Vercel build-instellingen
