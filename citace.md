# Zdroje a citace

Obsah této stránky je původní stručné vysvětlení základních pojmů algoritmizace. Při přípravě byly použity následující studijní podklady, které poskytl zadavatel:

1. **Pšenčíková, Jana.** *Algoritmizace.* Computer Media, 2007. ISBN 80-86686-80-9. Podklad: `ALGORITMIZACE.pdf`. Využito pro ověření témat vlastností algoritmu, podmínek řešitelnosti a základních řídicích struktur. Text na webu je parafrázovaný; stránky nepřebírají rozsáhlé pasáže z knihy.
2. **Vývojové diagramy.** Studijní materiál ve formátu PDF, soubor `vyvojove_diagramy.pdf`, poskytnutý zadavatelem. Autor a rok vydání nejsou v předaných údajích uvedeny. Využito pro přehled základních značek a jejich použití.
3. **Algoritmizace – zpracování textu.** Studijní materiál ve formátu Markdown, soubor `algo1.md`, poskytnutý zadavatelem. Autor a datum nejsou v předaném souboru uvedeny. Využito jako osnova témat; vysvětlení a kvíz na stránce jsou zpracovány vlastními slovy.

Ilustrace vývojového diagramu a grafické prvky stránky byly vytvořeny pro tento web; nejsou převzaty z uvedených publikací.

## Jak vznikl kód stránky

Při tvorbě jsem začal základní kostrou HTML5 (`<!doctype html>`, `<html lang="cs">`, `<head>` a `<body>`). Jazyk `cs` prohlížeči a asistivním technologiím říká, že obsah je česky. Do `<head>` jsem přidal kódování znaků, nastavení zobrazení na mobilu, popis stránky, její název a odkazy na samostatné soubory CSS a JavaScriptu.

Obsah jsem rozdělil do sémantických částí `<header>`, `<nav>`, `<main>`, `<section>` a `<footer>`, aby bylo jasné, která část stránky k čemu slouží. Hlavní nadpis stránky je `<h1>`; nadpisy jednotlivých částí jsou `<h2>` a menší nadpisy karet `<h3>`. Tato hierarchie usnadňuje orientaci při čtení i používání čtečky obrazovky. Odkazy v navigaci míří na odpovídající `id` sekcí.

Kvíz je vytvořen pomocí formuláře, skupin `<fieldset>` a nadpisů `<legend>`. Každá odpověď má vlastní popisek `<label>`, takže ji lze pohodlně vybrat i klávesnicí. JavaScript načítaný s atributem `defer` kontroluje odpovědi a resetuje kvíz; výsledek oznamuje čtečce obrazovky oblast s `aria-live`. Vzhled, barvy a přizpůsobení mobilům jsou oddělené v `styles.css`, aby struktura HTML zůstala přehledná.

## Kontrola HTML

HTML jsem zkontroloval místně nástrojem **html-validate 11.22.1** ([html-validate.org](https://html-validate.org/)). První kontrola našla dva problémy: malé písmo v deklaraci `DOCTYPE` a chybějící přístupnou roli u ilustrace. Po opravě prošel `index.html` kontrolou bez chyb a varování. Při kontrole jsem obsah souboru neposílal na internet.

Samostatně jsem ověřil, že odkazy na části stránky mají odpovídající cíle, soubory CSS a JavaScriptu jsou dostupné a kvíz reaguje na správné i chybné odpovědi. JavaScript prošel také kontrolou syntaxe.
