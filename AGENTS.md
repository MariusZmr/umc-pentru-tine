# AGENTS.md — UMC pentru TINE

> Instrucțiuni pentru agenții AI care dezvoltă sau modifică website-ul „UMC pentru TINE”.
> Versiune: 2.0 — direcție vizuală derivată din cele 12 simulări furnizate de beneficiar.
> **Simulările sunt referințe de design, nu dovezi că toate informațiile, fotografiile sau interacțiunile există în realitate.**

## 0. Principiul obligatoriu

**Implementează fidel designul de referință, fă modificări strict delimitate și nu deteriora alte pagini.**
Nu confunda modernizarea tehnică (Next.js, Tailwind, shadcn/ui) cu redesign-ul vizual. Website-ul are intenționat o estetică universitară editorială: titluri serif, albastru marin, accente aurii, fotografii maritime luminoase, fundaluri albe și valuri pastel discrete.

Prioritate, în această ordine:
1. Corectitudinea și funcționalitatea.
2. Fidelitatea față de simulările aprobate.
3. Consistența între pagini.
4. Accesibilitatea și responsive design.
5. Calitatea și mentenabilitatea codului.
6. Efectele vizuale/animarea, numai dacă adaugă valoare.

## 1. Stack și reguli de lucru

- Next.js + React + TypeScript; respectă router-ul și organizarea deja folosite în repository.
- Tailwind CSS, shadcn/ui, Lucide React, Framer Motion/Motion deja instalat.
- Nu instala pachete, nu schimba versiuni și nu crea framework-uri CSS paralele fără aprobare.
- Inspectează `package.json`, structura `app/` sau `src/app/`, componentele, `globals.css`, tokenurile și asset-urile înainte de orice editare.
- Folosește `next/image` pentru imagini când este adecvat, cu `sizes`, `priority` numai pentru hero above-the-fold, `alt` descriptiv și poziționare explicită.
- Evită schimbările globale de stil care repară o pagină și afectează altele.

## 2. Sursa de adevăr pentru design

Referințele furnizate acoperă:
- Homepage „UMC pentru TINE”.
- „Ghidul studentului”.
- „Primii pași la UMC”.
- „Sprijin și incluziune” — rezumat și secțiuni detaliate.
- „Carieră și orientare” — două variante de dispunere (nu le combina arbitrar).
- „Implică-te!”.
- „Cere sprijin și îndrumare” — formular inițial și formular extins.
- „Panou intern solicitări” — interfață administrativă, cu reguli separate.

**Când două capturi arată variante diferite ale aceleiași pagini, nu încerca să afișezi simultan ambele variante.** Păstrează structura implementată, compară opțiunile și solicită alegerea variantei doar dacă nu există o decizie anterioară. Nu inventa secțiuni pentru a umple spațiul.

Tratament obligatoriu al simulărilor:
- Preia ierarhia, tipografia, proporțiile, paleta și ritmul compoziției.
- Nu transforma textele, parteneriatele, evenimentele, numele, cifrele, contactele sau aspectele instituționale din mockup în date verificate.
- Fotografiile generate AI reprezintă ilustrații; nu le prezenta ca documentare ale campusului, accesibilității sau evenimentelor reale.
- Folosește logoul instituțional din asset-urile aprobate; nu decupa logo-uri din capturi și nu genera unul nou.

## 3. Limbaj vizual UMC

### 3.1 Paletă

Tokenuri orientative (aliniază-le cu cele existente, fără dublare):
- `--umc-navy: #092e6b` — titluri, iconografie, butoane.
- `--umc-navy-deep: #062653` — footer și zone întunecate.
- `--umc-blue: #0b4d98` — accente și stări interactive.
- `--umc-gold: #e5a000` — sublinieri scurte, nu suprafețe dominante.
- `--umc-ice: #eaf5fd` — fundal maritim foarte deschis.
- `--umc-sky: #dceffc` — valuri și fundaluri secundare.
- `--umc-white: #ffffff` — suprafață principală.
- `--umc-text: #14356a` — text editorial.
- `--umc-border: #d7e7f4` — borduri fine.

Nu dispersa culorile hex peste componente. Folosește variabile CSS / configurarea Tailwind existentă. Valorile sunt de pornire, nu justifică o schimbare globală fără comparație vizuală.

### 3.2 Tipografie

**Simulările folosesc un contrast intenționat serif vs sans-serif.**
- H1, H2, H3 și heading-uri editoriale: serif clasic, lizibil (preferă fontul serif deja folosit; altfel aprobă unul de tip Georgia / un font web potrivit).
- Paragrafe editoriale: stilul serif al simulărilor sau un serif optimizat pentru lizibilitate dacă această direcție a fost aprobată.
- Navbar, formulare, filtre, tabele, metadata, inputuri și butoane: sans-serif clar.
- Titlurile să fie navy, NU bold sans-serif masiv, din oficiu.
- Sublinierile aurii: scurte (~44–80 px), sub heading, eventual ușor ondulate, constante între pagini.
- Păstrează diacriticele românești; evită text prea mic, chiar dacă o simulare miniaturizată îl face să pară foarte dens.
- Folosește `clamp()`/clase responsive și limitează lățimea rândului de text pentru citire.

### 3.3 Spațiere și suprafețe

- Fundal general predominant alb. Bleu foarte deschis doar în secțiunile evidențiate.
- Spații generoase, dar nu goale fără scop. Un ritm coerent între heading, text, imagine și CTA.
- Container comun: ~1200–1320 px pe desktop, cu margini interioare responsive; nu impune valori noi unui proiect care are deja un container aprobat.
- Carduri albe, contur albastru pal de 1 px, raze moderate (~8–12 px), umbre foarte discrete sau deloc.
- **Nu încapsula automat paragrafele introductive într-un card.** În simulări, acestea sunt în majoritate text editorial direct pe fundal alb.
- Alinierea secțiunilor și a coloanelor trebuie să fie coerentă; fără strângerea arbitrară a întregii pagini într-o coloană îngustă.

## 4. Sistemul Hero — foarte important

### Compoziție aprobată

- Hero tip fotografie panoramică maritimă / campus, cu subiecții în dreapta sau în zona liberă.
- Textul este în stânga: breadcrumb deasupra, H1 serif navy, subliniere aurie, subtitlu serif navy.
- Fotografia trebuie să fie luminoasă, clară și vizibilă până la limita inferioară.
- Textul se așază în spațiul negativ real al imaginii; la nevoie se ajustează `object-position` și dimensiunile/încadrarea imaginii.
- Hero suficient de înalt pentru titlu și fotografie, fără tăierea arbitrară a subiecților; înălțimea se stabilește pe baza compoziției, nu dintr-o valoare globală forțată.
- Breadcrumb să fie lizibil și cu contrast bun; pe mobil poate fi simplificat sau mutat conform accesibilității.

### Ce este interzis

- Dreptunghi alb/semialb transparent vizibil în spatele textului.
- `backdrop-blur`, glassmorphism sau „card” Hero.
- Overlay navy închis peste toată fotografia.
- Fade alb/ceață la baza fotografiei.
- Text alb pe cer sau alt fundal luminos.
- Crop care taie persoane într-o manieră inestetică.

### Dacă ai nevoie de contrast suplimentar

1. Încearcă **mai întâi** compoziția: `object-position`, text width, amplasarea stângă și o altă variantă a fotografiei aprobate.
2. Dacă încă nu se citește bine, folosește numai un **gradient luminos difuz pe întreaga înălțime**, ancorat la marginea stângă, care dispare progresiv spre dreapta, fără margine rectangulară detectabilă.
3. Gradientul este condițional, nu obligatoriu. Verifică atât foto, cât și text.

Exemplu conceptual, NU stil global impus:
```css
.hero-soft-overlay {
  background: linear-gradient(
    90deg,
    rgba(234, 245, 253, .92) 0%,
    rgba(234, 245, 253, .64) 24%,
    rgba(234, 245, 253, .18) 43%,
    rgba(234, 245, 253, 0) 62%
  );
}
```

## 5. Sistemul maritim cu valuri

**Valurile rămân un element de identitate vizuală, dar au trei roluri distincte.**

### A. Hero → conținut

- Separator SVG **unic**, reutilizabil, cu 1 path principal (al doilea strat permis doar dacă nu apare bandă artificială).
- Amplitudine redusă, ~12–24 px; zona de separator ~24–40 px desktop, adaptiv pe mobil.
- Valul formează limita inferioară a imaginii, fără a crea spații goale sau un rând separat gros.
- `fill` = culoarea **exactă** a secțiunii următoare.
- `preserveAspectRatio="none"` doar în separator; nicio fotografie nu se deformează.
- Nu combina separatorul cu fade-out alb și nu suprapune 3–4 SVG-uri.

### B. „Nu ai găsit răspunsul? Cere sprijin!”

- Bandă CTA transversală cu fundal `support-waves` aprobat: alb/bleu pal, valuri mai expresive, ancoră foarte discretă în dreapta.
- Text navy la stânga, subtitlu informativ, buton navy rotunjit la dreapta (pe mobil sub text).
- Evită ca ancora să intre peste text.
- Nu adăuga separator alb suplimentar peste un pattern care deja include valul superior.

### C. Footer

- Fundal navy profund, pattern cu valuri albastre **ton pe ton**.
- Logo într-o versiune cu contrast ridicat; contact, linkuri și social media lizibile.
- Nu crea benzi albe opace, valuri care taie rândurile de conținut sau wave-dividers redundanți.
- Păstrează footer-ul consistent pe toate paginile publice.

### Integrare

- Folosește asset-urile de background aprobate din `public/assets/umc/patterns/` dacă sunt disponibile.
- `background-size: cover` poate tăia ancora; testează explicit la 390, 768, 1024 și 1440 px. Dacă este necesar, folosește un strat separat pentru ancoră și unul pentru valuri, fără distorsiuni.
- Nu introduce un nou pattern dacă cel existent funcționează.

## 6. Componente și secțiuni recurente

Preferă componente partajate, dar refactorizează-le doar când cerința o justifică:
- `SiteHeader`
- `PageHero`
- `WaveDivider`
- `SectionHeading` (serif navy + accent auriu)
- `PageContainer`
- `EditorialSection` (text + imagine alternantă)
- `ImageCard` / `DocumentCard` / `InfoCard`
- `SupportCTA`
- `SiteFooter`

### Header public

- Bară albă; sigla UMC stânga, navigație orizontală dreapta.
- Itemul activ prin subliniere aurie discretă, nu pill bleumarin mare, dacă referința nu cere altfel.
- Responsive: meniu mobil accesibil, fără comprimare excesivă a logo-ului.
- Conținutul vizual al paginilor nu trebuie să treacă sub header în mod accidental.

### Cards

- Imagini clare, fără dungi de decupaj, cu rapoarte de aspect uniforme în același grid.
- Icon Lucide navy pe cerc pastel bleu, acolo unde este folosit în referință.
- Titlu serif; descriere clară; CTA dimensionat corespunzător.
- Carduri cu înălțimi coerente, fără spații uriașe între titlu și acțiune.
- Nu pune câte un buton mare în orice card dacă simularea folosește un mic icon/link extern.

### Alternare conținut

Pagini ca „Carieră”, „Implică-te!” și „Sprijin și incluziune” folosesc:
- rânduri editoriale cu text + fotografie;
- alternarea imaginii stânga/dreapta, unde există în simulare;
- delimitări fine sau schimbări foarte discrete de fundal;
- carduri/ghiduri acolo unde au valoare, nu în locul tuturor paragrafelor.

## 7. Reguli specifice paginilor

### Homepage — `UMC pentru TINE`

- Hero fotografic luminos cu headline și subtitlu în stânga.
- „Actual pentru tine”: 3 carduri compacte cu fotografie mică, dată, titlu, descriere.
- „Explorează principalele categorii”: grid 3 × 2 pe desktop, iconuri pastel, titlu și descriere; elementul „Cere sprijin și îndrumare” poate avea accent auriu.
- Background cu valuri albastru foarte deschis în zona categoriilor.
- Footer comun.

### Ghidul studentului

- Hero, intro **direct pe alb**, apoi 4 document cards pe desktop.
- Cardurile au foto sus, icon document, titlu și indicator de link; nu crea zone albe exagerat de mari.
- Documentele trebuie să deschidă resursele reale configurate, nu URL-uri inventate.
- SupportCTA comun.

### Primii pași la UMC

- Hero și câteva paragrafe editoriale fără card de intro.
- Două carduri/linkuri orizontale cu imagine în stânga și titlu/icon în dreapta: admitere, orar și discipline.
- SupportCTA comun.

### Sprijin și incluziune

- Hero incluziv și luminos.
- Intro + 4 categorii (consiliere, sprijin social/financiar, accesibilitate, egalitate de șanse).
- Secțiuni detaliate (text + imagini): CCOC, burse/cazare, accesibilitate, respect/integrare.
- Contacte utile în carduri numai unde apar în referință.
- Nu trata imagini AI cu rampe ca dovadă a facilităților reale.

### Carieră și orientare

- Hero portuar.
- Secțiuni editoriale despre viitor profesional și parteneriate de practică.
- Ghid de angajare: CV, scrisoare de intenție, interviu.
- Oportunități, evenimente și resurse utile.
- Există două compoziții în simulări; păstrează varianta de pagină aleasă, nu duplica secțiunile doar pentru că apar în ambele variante.

### Implică-te!

- Hero despre comunitate și voluntariat.
- Secțiuni despre participare în UMC, voluntariat intern, Liga Studenților, seri comunitare, reprezentare, voluntariat extern.
- Reprezentarea studențească și voluntariatul sunt categorii diferite; păstrează această distincție în UI.
- Beneficiile implicării pot apărea într-un grid discret de iconuri.
- CTA-uri legate de destinațiile reale.

### Cere sprijin și îndrumare

- **Nu folosi Hero fotografic în această pagină**, ci bandă de titlu bleu deschis cu ancoră foarte pală.
- Proces în 3 pași: Completezi solicitarea → Analizăm și te îndrumăm → Primești răspunsul.
- Formular alb, clar, cu validare, mesaje de eroare și focus vizibil.
- Student UMC vs elev: câmpurile academice și categoriile apar condițional când sunt relevante; nu solicita date nejustificate.
- Câmpuri de bază: nume, prenume, e-mail, statut, descriere; checkbox informare privind datele.
- Protejează datele personale: nu afișa cereri în pagini publice și nu loga informații personale inutil.
- Varianta extinsă a formularului este referința preferată pentru traseul studenților, dar verifică cerințele de produs înainte de a forța toate câmpurile.

### Panou intern solicitări — excepție de stil

- Interfață operațională, nu pagină editorială publică.
- Se acceptă **sans-serif predominant**, tabel, filtre, carduri KPI și badge-uri de status.
- Sidebar / panou de detalii la dreapta; listă solicitări și istoric.
- Badge-uri status clare: Nouă, În lucru, Rezolvată; nu te baza doar pe culoare.
- Datele din captură sunt demonstrative, nu date reale.
- Acces controlat pe roluri, protecția datelor beneficiarilor, fără expunere accidentală de e-mailuri.
- Nu aplica stilul de Hero fotografic al site-ului public peste panoul intern.

## 8. Responsive + accesibilitate

Verificare minimă la 390, 768, 1024, 1440 px:
- Fără overflow pe orizontală.
- Hero: text vizibil, subiecți neacoperiți și crop adecvat.
- Card grids: 4→2→1 sau 3→2→1 după structură.
- Text: contrast și dimensiune lizibile (fără reducere excesivă pentru a încăpea).
- Formulare cu `label`, `aria-invalid`, mesaje de eroare asociate, focus vizibil.
- Navigație tastatură și controale interactive semantice.
- Respectă `prefers-reduced-motion`.
- Optimizare încărcare imagini, evitarea CLS și încărcarea lazy sub fold.

## 9. Animații

- Motion discret pentru apariția conținutului sau hover în carduri; niciodată esențial pentru înțelegere.
- Fără parallax agresiv, fade care micșorează contrastul și animații pe fundalurile maritime statice.
- Nu controla spacing-ul sau stabilitatea layout-ului prin Motion.
- Evită animațiile pe formular care distrag sau împiedică operarea.

## 10. Asset-uri

Organizare propusă, dacă nu există una echivalentă:
```text
public/assets/umc/
  homepage/
  ghid/
  primii_pasi/
  cariera/
  implicare/
  sprijin/
  patterns/
  logos/
```

- Utilizează denumiri consistente, preferabil `snake_case.webp` dacă inventarul existent folosește această convenție.
- Nu reutiliza o imagine într-o secțiune cu altă semnificație fără verificare.
- Nu introduce din nou miniaturi cropate dacă există variante curate.
- Verifică marginile asset-ului (fără linii albe), proporțiile, claritatea și crop-ul la rezoluție de afișare.
- Folosește logouri și date instituționale doar din surse aprobate.
- Ai grijă la textul generat în imagini; înlocuiește titluri/documente cu text HTML real acolo unde poate induce în eroare.

## 11. Workflow obligatoriu pentru orice agent

### Etapa A — Inspecție

1. Citește acest `AGENTS.md`.
2. Identifică exact cererea utilizatorului, pagina, componenta și starea actuală.
3. Consultă simularea relevantă.
4. Inspectează fișierele componentei și dependențele sale.
5. Notează dacă modificarea atinge componente comune și ce pagini ar putea fi afectate.

### Etapa B — Plan minimal

Înainte de editare, formulează pe scurt:
- cauza probabilă;
- fișierele implicate;
- schimbarea minimă;
- ce nu vei modifica;
- cum vei verifica.

Dacă utilizatorul a cerut execuție, nu amâna implementarea pentru confirmări inutile.

### Etapa C — Implementare

- Modifică doar fișierele necesare.
- Nu rescrie alte pagini și nu schimba structura datelor.
- Nu șterge conținut sau comportament existent pentru a simplifica layout-ul.
- Nu introduce gradient/card/separator nou fără legătură directă cu referința.
- Folosește componente comune pentru mecanisme comune, fără refactorizare extinsă gratuită.

### Etapa D — Verificare

- Rulează verificările deja definite în proiect (TypeScript, lint, build, teste relevante).
- Redă vizual pagina dacă există mediu de browser și inspectează la 390/768/1024/1440 px.
- Compară cu simularea: H1, navbar activ, fotografie, aliniamente, valuri, intro, carduri, CTA, footer.
- Verifică vizual alte pagini afectate de componente comune.
- Nu declara că ai verificat vizual dacă nu ai avut instrumente de randare; spune explicit ce verificări au fost posibile.

### Etapa E — Raport final

Răspunsul agentului trebuie să conțină:
1. Ce problemă a rezolvat.
2. Ce fișiere/componente a modificat.
3. Ce verificări a efectuat și rezultatele.
4. Ce rămâne de verificat.
5. Dacă a afectat sau nu alte pagini.

## 12. Anti-patterns observate în iterațiile anterioare

**Nu repeta aceste regresii:**
- Bandă albă opacă peste tranziția Hero → body.
- Valuri multiple intercalate și linii de îmbinare albe.
- Gradient alb vertical care „șterge” picioarele studenților.
- Dreptunghi semitransparent vizibil în spatele H1.
- Text alb pe cer luminos.
- Hero redus excesiv, tăind compoziția.
- Trecere bruscă la un container prea îngust.
- Intro editorial transformat într-un card cu border/shadow.
- Carduri de documente cu înălțimi goale, butoane lipite jos și titluri înghesuite.
- Footer cu logo aproape invizibil.
- Componente comune modificate la nivel global fără verificarea paginilor dependente.

## 13. Criterii finale de acceptare

O schimbare este acceptabilă numai dacă:
- Respectă compoziția și limbajul vizual din simularea potrivită.
- Este lizibilă și accesibilă.
- Păstrează wave system coerent.
- Nu introduce artefacte, fade-uri nedorite sau linii de decupaj.
- Este responsive.
- Nu rupe funcționalitatea și nu introduce regresii în pagini conexe.
- Are un raport clar despre modificări și verificări.

**Regula finală: Fidelitate înainte de creativitate. Corecție punctuală înainte de redesign.**
