from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

from reportlab.lib import colors
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import landscape, letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "app-waypoint-master-style-legend.pdf"

PAGE_W, PAGE_H = landscape(letter)
MARGIN = 36
CONTENT_W = PAGE_W - (MARGIN * 2)


def register_fonts() -> dict[str, str]:
    fonts = {
        "display": "Times-Roman",
        "display_bold": "Times-Bold",
        "ui": "Helvetica",
        "ui_bold": "Helvetica-Bold",
        "mono": "Courier",
        "mono_bold": "Courier-Bold",
    }

    candidates = [
        ("Philippine", ROOT / "public" / "fonts" / "Philippine-Regular.otf", "display"),
        ("Philippine-Bold", ROOT / "public" / "fonts" / "Philippine-Bold.otf", "display_bold"),
        ("Seamless", ROOT / "public" / "fonts" / "Seamless.ttf", "brand"),
    ]

    for name, path, key in candidates:
        try:
            if path.exists():
                pdfmetrics.registerFont(TTFont(name, str(path)))
                fonts[key] = name
        except Exception:
            pass

    if "brand" not in fonts:
        fonts["brand"] = fonts["display_bold"]

    return fonts


FONTS = register_fonts()


LIGHT = {
    "page": ("#e7ddcd", "Outer page field"),
    "bg": ("#f4ebdd", "Header, footer, homepage hero atmosphere"),
    "surface": ("#faf4e9", "Primary cards and panels"),
    "surface-strong": ("#eee2d0", "Tags, chips, icon tiles"),
    "text": ("#092443", "Primary ink"),
    "muted": ("#4d5762", "Secondary copy and metadata"),
    "line": ("#092342 / 20%", "Borders and dividers"),
    "accent": ("#0862d8", "Links, active nav, CTAs"),
    "accent-hover": ("#004caf", "Hover accent"),
    "note-bg": ("#eadfcd", "Note surface"),
    "note-text": ("#31485d", "Note copy"),
    "header-bg": ("#f4ebdd / 96%", "Sticky header fill"),
}

DARK = {
    "page": ("#091321", "Outer page field"),
    "bg": ("#020b18", "Deep background canvas"),
    "surface": ("#0b1c30", "Primary cards and panels"),
    "surface-strong": ("#10253b", "Tags, chips, icon tiles"),
    "text": ("#f3ecdf", "Primary ink"),
    "muted": ("#afb6bf", "Secondary copy and metadata"),
    "line": ("#d9e5f0 / 20%", "Borders and dividers"),
    "accent": ("#57a2ff", "Links, active nav, CTAs"),
    "accent-hover": ("#81b8ff", "Hover accent"),
    "note-bg": ("#0c2137", "Note surface"),
    "note-text": ("#c1cbd4", "Note copy"),
    "header-bg": ("#041426 / 96%", "Sticky header fill"),
}

RADIUS = {
    "xs": "8px",
    "sm": "10px",
    "md": "12px",
    "lg": "18px",
    "pill": "999px",
}

SPACING = {
    "xs": "6px",
    "sm": "10px",
    "md": "14px",
    "lg": "16px",
    "xl": "24px",
    "2xl": "32px",
    "3xl": "40px",
    "4xl": "56px",
    "5xl": "72px",
}

TYPE_SCALE = [
    ("App detail display", "clamp(4rem, 8vw, 6rem)", "500", "0.92", "Sonexis"),
    ("Page headline", "clamp(3.25rem, 5.1vw, 4.25rem)", "500", "0.96", "Explore Apps"),
    ("Section title", "clamp(2.2rem, 4vw, 3.8rem)", "500", "1.0", "Browse by category"),
    ("Card title / app name", "1.4rem", "600", "1.15", "WhimFiles"),
    ("Body copy", "1rem", "400", "1.55", "Mac apps chosen by hand, surfaced by the community, and organized for discovery."),
    ("Metadata", ".84rem", "600", "1.45", "Source: Editor selection and official homepage"),
    ("Label / eyebrow", ".78rem", "800", "1.0", "CATEGORY PREVIEW"),
    ("Small label", ".73rem", "700", "1.0", "EXPLORE"),
]

CATEGORY_ACCENTS = [
    ("AI & Agents", "accent 12% + surface-strong"),
    ("Developer Tools", "accent 10% + surface-strong"),
    ("Files, Research & Documents", "accent 8% + surface-strong"),
    ("Mac Utilities & Customization", "accent 9% + surface-strong"),
    ("Productivity & Workflow", "accent 11% + surface-strong"),
    ("Writing, Notes & Reading", "accent 7% + surface-strong"),
]


@dataclass
class Theme:
    name: str
    tokens: dict[str, tuple[str, str]]
    page: str
    bg: str
    surface: str
    surface_strong: str
    text: str
    muted: str
    line: colors.Color
    accent: str
    accent_hover: str


LIGHT_THEME = Theme(
    name="Light",
    tokens=LIGHT,
    page="#e7ddcd",
    bg="#f4ebdd",
    surface="#faf4e9",
    surface_strong="#eee2d0",
    text="#092443",
    muted="#4d5762",
    line=colors.Color(9 / 255, 35 / 255, 66 / 255, alpha=0.2),
    accent="#0862d8",
    accent_hover="#004caf",
)

DARK_THEME = Theme(
    name="Dark",
    tokens=DARK,
    page="#091321",
    bg="#020b18",
    surface="#0b1c30",
    surface_strong="#10253b",
    text="#f3ecdf",
    muted="#afb6bf",
    line=colors.Color(217 / 255, 229 / 255, 240 / 255, alpha=0.2),
    accent="#57a2ff",
    accent_hover="#81b8ff",
)


def hex_color(value: str) -> colors.Color:
    return HexColor(value)


def para(canvas: Canvas, text: str, x: float, y_top: float, width: float, font: str, size: float, color: str | colors.Color, leading: float | None = None, bold: bool = False) -> float:
    style = ParagraphStyle(
        name="p",
        fontName=font,
        fontSize=size,
        leading=leading or size * 1.35,
        textColor=hex_color(color) if isinstance(color, str) else color,
        alignment=TA_LEFT,
        spaceAfter=0,
    )
    p = Paragraph(text.replace("&", "&amp;"), style)
    _, h = p.wrap(width, 500)
    p.drawOn(canvas, x, y_top - h)
    return h


def draw_round_rect(c: Canvas, x: float, y: float, w: float, h: float, fill: str | colors.Color, stroke: str | colors.Color | None = None, radius: float = 12, width: float = 1) -> None:
    c.saveState()
    c.setFillColor(hex_color(fill) if isinstance(fill, str) else fill)
    if stroke is None:
        c.setStrokeColor(colors.transparent)
        c.setLineWidth(0)
    else:
        c.setStrokeColor(hex_color(stroke) if isinstance(stroke, str) else stroke)
        c.setLineWidth(width)
    c.roundRect(x, y, w, h, radius, fill=1, stroke=0 if stroke is None else 1)
    c.restoreState()


def label(c: Canvas, text: str, x: float, y: float, color: str) -> None:
    c.saveState()
    c.setFont(FONTS["ui_bold"], 8.5)
    c.setFillColor(hex_color(color))
    c.drawString(x, y, text.upper())
    c.restoreState()


def title(c: Canvas, text: str, sub: str, page_no: int) -> None:
    c.saveState()
    c.setFillColor(hex_color("#092443"))
    c.setFont(FONTS["brand"], 18)
    c.drawString(MARGIN, PAGE_H - 34, "APP WAYPOINT")
    c.setFont(FONTS["mono"], 8)
    c.setFillColor(hex_color("#4d5762"))
    c.drawRightString(PAGE_W - MARGIN, PAGE_H - 32, f"Master Style Legend / {page_no:02d}")
    c.setStrokeColor(colors.Color(9 / 255, 35 / 255, 66 / 255, alpha=0.18))
    c.line(MARGIN, PAGE_H - 50, PAGE_W - MARGIN, PAGE_H - 50)
    c.setFont(FONTS["display_bold"], 34)
    c.setFillColor(hex_color("#092443"))
    c.drawString(MARGIN, PAGE_H - 92, text)
    para(c, sub, MARGIN, PAGE_H - 108, 640, FONTS["ui"], 10.5, "#4d5762", 14)
    c.restoreState()


def footer(c: Canvas) -> None:
    c.saveState()
    c.setStrokeColor(colors.Color(9 / 255, 35 / 255, 66 / 255, alpha=0.12))
    c.setFont(FONTS["mono"], 7.5)
    c.setFillColor(hex_color("#4d5762"))
    c.drawString(MARGIN, 20, "Source: src/styles/global.css, DESIGN.md, and current Astro component patterns.")
    c.drawRightString(PAGE_W - MARGIN, 20, "Reskin foundation - token names preserved")
    c.restoreState()


def draw_theme_panel(c: Canvas, theme: Theme, x: float, y: float, w: float, h: float) -> None:
    draw_round_rect(c, x, y, w, h, theme.page, theme.line, 18)
    draw_round_rect(c, x + 18, y + h - 78, w - 36, 52, theme.bg, theme.line, 0)
    c.setFillColor(hex_color(theme.text))
    c.setFont(FONTS["display_bold"], 27)
    c.drawString(x + 28, y + h - 62, f"{theme.name} Mode")
    c.setFont(FONTS["ui"], 9.5)
    c.setFillColor(hex_color(theme.muted))
    c.drawString(x + 30, y + h - 76, "Header, page field, card, link, tag, and metadata treatments")

    card_x = x + 28
    card_y = y + 40
    card_w = w - 56
    card_h = h - 142
    card_top = card_y + card_h
    draw_round_rect(c, card_x, card_y, card_w, card_h, theme.surface, theme.line, 12)
    c.setFillColor(hex_color(theme.text))
    c.setFont(FONTS["display_bold"], 23)
    c.drawString(card_x + 20, card_top - 42, "WhimFiles")
    para(c, "A lightweight native file manager with dual panes, fuzzy navigation, previews, and batch renaming.", card_x + 20, card_top - 62, card_w - 40, FONTS["ui"], 9.4, theme.muted, 12.2)

    tags = ["files", "finder", "productivity", "utility"]
    tx = card_x + 20
    ty = card_y + 42
    for tag in tags:
        tw = c.stringWidth(tag, FONTS["ui_bold"], 8.5) + 18
        draw_round_rect(c, tx, ty, tw, 20, theme.surface_strong, None, 10)
        c.setFillColor(hex_color(theme.muted))
        c.setFont(FONTS["ui_bold"], 8.5)
        c.drawString(tx + 9, ty + 6, tag)
        tx += tw + 6

    c.setFillColor(hex_color(theme.accent))
    c.setFont(FONTS["ui_bold"], 8)
    c.drawString(card_x + 20, card_y + 18, "OPEN THE FULL DIRECTORY")


def page_overview(c: Canvas) -> None:
    c.setFillColor(hex_color(LIGHT_THEME.page))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    title(c, "System Overview", "A compact map of App Waypoint's current visual language. Use this as the baseline before deciding what should stay, shift, or disappear in a reskin.", 1)

    draw_theme_panel(c, LIGHT_THEME, MARGIN, 170, 345, 300)
    draw_theme_panel(c, DARK_THEME, MARGIN + 375, 170, 345, 300)

    x = MARGIN
    y = 92
    label(c, "Brand posture", x, y + 62, LIGHT_THEME.accent)
    para(c, "Small premium editorial publication for experienced Mac users. Restrained, highly legible, Mac-native, technically polished, calm, useful, and slightly playful.", x, y + 48, 340, FONTS["ui"], 10.5, LIGHT_THEME.text, 14)
    label(c, "Reskin guardrails", x + 378, y + 62, LIGHT_THEME.accent)
    para(c, "Preserve the editorial hierarchy, internal-card rhythm, quiet metadata, clear link affordances, and paired light/dark behavior. Color can change; meaning should remain mapped.", x + 378, y + 48, 340, FONTS["ui"], 10.5, LIGHT_THEME.text, 14)
    footer(c)


def draw_token_column(c: Canvas, theme: Theme, x: float, y_top: float, w: float) -> None:
    draw_round_rect(c, x, y_top - 370, w, 370, theme.surface, theme.line, 14)
    c.setFont(FONTS["display_bold"], 22)
    c.setFillColor(hex_color(theme.text))
    c.drawString(x + 18, y_top - 32, f"{theme.name} tokens")
    row_y = y_top - 58
    for token, (value, use) in theme.tokens.items():
        swatch = value.split(" / ")[0]
        swatch_color = swatch if swatch.startswith("#") else theme.surface
        draw_round_rect(c, x + 18, row_y - 14, 30, 20, swatch_color, theme.line, 6)
        c.setFont(FONTS["mono_bold"], 8)
        c.setFillColor(hex_color(theme.text))
        c.drawString(x + 58, row_y - 2, f"--{token}")
        c.setFont(FONTS["mono"], 8)
        c.setFillColor(hex_color(theme.accent))
        c.drawRightString(x + w - 18, row_y - 2, value)
        c.setFont(FONTS["ui"], 7.5)
        c.setFillColor(hex_color(theme.muted))
        c.drawString(x + 58, row_y - 13, use)
        row_y -= 26


def page_colors(c: Canvas) -> None:
    c.setFillColor(hex_color(LIGHT_THEME.page))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    title(c, "Color Inventory", "Every primary semantic color currently used by the site, shown as a token, hex value, and role. Alpha colors are represented as base hex plus opacity.", 2)
    draw_token_column(c, LIGHT_THEME, MARGIN, 460, 340)
    draw_token_column(c, DARK_THEME, MARGIN + 382, 460, 340)

    label(c, "Category accent mixes", MARGIN, 70, LIGHT_THEME.accent)
    x = MARGIN
    for name, mix in CATEGORY_ACCENTS:
        draw_round_rect(c, x, 42, 112, 20, LIGHT_THEME.surface_strong, LIGHT_THEME.line, 10)
        c.setFont(FONTS["ui_bold"], 6.7)
        c.setFillColor(hex_color(LIGHT_THEME.text))
        c.drawCentredString(x + 56, 54, name[:22])
        c.setFont(FONTS["mono"], 5.8)
        c.setFillColor(hex_color(LIGHT_THEME.muted))
        c.drawCentredString(x + 56, 45, mix)
        x += 120
    footer(c)


def page_typography(c: Canvas) -> None:
    c.setFillColor(hex_color(LIGHT_THEME.page))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    title(c, "Typography System", "The current site is serif-led for editorial authority, with system sans for utility and monospace for technical URLs. Custom font assets are available for future reskin work.", 3)

    draw_round_rect(c, MARGIN, 290, 342, 180, LIGHT_THEME.surface, LIGHT_THEME.line, 14)
    label(c, "Current stacks", MARGIN + 18, 442, LIGHT_THEME.accent)
    para(c, "<b>Display:</b> Iowan Old Style, Baskerville, Times New Roman, serif", MARGIN + 18, 420, 300, FONTS["ui"], 10, LIGHT_THEME.text, 14)
    para(c, "<b>UI/body:</b> -apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, sans-serif", MARGIN + 18, 372, 300, FONTS["ui"], 10, LIGHT_THEME.text, 14)
    para(c, "<b>Mono:</b> ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas", MARGIN + 18, 318, 300, FONTS["ui"], 10, LIGHT_THEME.text, 14)

    draw_round_rect(c, MARGIN + 374, 290, 350, 180, DARK_THEME.surface, DARK_THEME.line, 14)
    label(c, "Available font assets", MARGIN + 392, 442, DARK_THEME.accent)
    para(c, "Philippine Light / Regular / Bold are bundled in public/fonts and can support future display work.", MARGIN + 392, 420, 304, FONTS["ui"], 10, DARK_THEME.text, 14)
    para(c, "Seamless is bundled as OTF and TTF, historically suited to wordmark-style usage.", MARGIN + 392, 366, 304, FONTS["ui"], 10, DARK_THEME.text, 14)

    label(c, "Type roles", MARGIN, 258, LIGHT_THEME.accent)
    y = 232
    for role, size, weight, leading, sample in TYPE_SCALE:
        c.setFont(FONTS["ui_bold"], 7.8)
        c.setFillColor(hex_color(LIGHT_THEME.accent))
        c.drawString(MARGIN, y + 16, role)
        c.setFont(FONTS["mono"], 7.2)
        c.setFillColor(hex_color(LIGHT_THEME.muted))
        c.drawString(MARGIN, y + 5, f"{size} / weight {weight} / lh {leading}")
        font = FONTS["display_bold"] if "Display" in role or "headline" in role.lower() or "Section" in role or "Card" in role else FONTS["ui"]
        font_size = 24 if role.startswith("App detail") else 20 if role.startswith("Page") else 17 if role.startswith("Section") else 12
        c.setFont(font, font_size)
        c.setFillColor(hex_color(LIGHT_THEME.text))
        c.drawString(MARGIN + 250, y + 6, sample[:68])
        y -= 27
    footer(c)


def component_card(c: Canvas, theme: Theme, x: float, y: float, w: float, title_text: str) -> None:
    draw_round_rect(c, x, y, w, 150, theme.surface, theme.line, 12)
    c.setFillColor(hex_color(theme.text))
    c.setFont(FONTS["display_bold"], 18)
    c.drawString(x + 18, y + 120, title_text)
    para(c, "Card background uses surface, one-pixel line, 12px radius, 24px padding, serif title, muted body, tags as quiet metadata.", x + 18, y + 100, w - 36, FONTS["ui"], 8.6, theme.muted, 11)
    c.setFillColor(hex_color(theme.text))
    c.setFont(FONTS["ui_bold"], 8.5)
    c.drawString(x + 18, y + 58, "Best for:")
    para(c, "Users who need reusable styling rules for a future reskin.", x + 66, y + 66, w - 84, FONTS["ui"], 8.5, theme.muted, 11)
    tx = x + 18
    for tag in ["cards", "tags", "source"]:
        tw = c.stringWidth(tag, FONTS["ui_bold"], 7) + 16
        draw_round_rect(c, tx, y + 17, tw, 18, theme.surface_strong, None, 9)
        c.setFont(FONTS["ui_bold"], 7)
        c.setFillColor(hex_color(theme.muted))
        c.drawString(tx + 8, y + 23, tag)
        tx += tw + 6


def page_components(c: Canvas) -> None:
    c.setFillColor(hex_color(LIGHT_THEME.page))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    title(c, "Component Recipes", "Core repeated treatments that need one-to-one mapping during reskinning: cards, category cards, chips, buttons, RSS module, header, footer, and states.", 4)

    component_card(c, LIGHT_THEME, MARGIN, 302, 220, "App Card")
    component_card(c, DARK_THEME, MARGIN + 248, 302, 220, "App Card")

    draw_round_rect(c, MARGIN + 496, 302, 228, 150, LIGHT_THEME.surface, LIGHT_THEME.line, 12)
    c.setFont(FONTS["display_bold"], 17)
    c.setFillColor(hex_color(LIGHT_THEME.text))
    c.drawString(MARGIN + 554, 414, "Category Card")
    draw_round_rect(c, MARGIN + 514, 396, 34, 34, LIGHT_THEME.surface_strong, None, 10)
    para(c, "Two or three columns, 14px gap, 18px padding, icon tile, count on the right, hover uses card hover action.", MARGIN + 554, 396, 140, FONTS["ui"], 8.4, LIGHT_THEME.muted, 11)

    y = 252
    rows = [
        ("Primary button", "44px min-height, 180px width, 999px radius, accent fill, white text, hover to accent-hover."),
        ("Tag chip", "7px 10px padding, 999px radius, surface-strong fill, muted text, lowercase."),
        ("RSS callout", "Card shell with 44px icon tile, serif h2, body text aligned with header, URL field below copy."),
        ("Header", "Sticky, 84px desktop / 70px mobile, translucent header-bg, bottom border, active nav underline."),
        ("Footer", "108px min-height, centered utility icons, bg fill, top border only."),
        ("Motion", "180ms color and lift transitions; reduced motion removes transitions and carousel easing."),
    ]
    for name, desc in rows:
        draw_round_rect(c, MARGIN, y - 26, 724, 34, LIGHT_THEME.surface, LIGHT_THEME.line, 8)
        c.setFont(FONTS["ui_bold"], 9)
        c.setFillColor(hex_color(LIGHT_THEME.text))
        c.drawString(MARGIN + 14, y - 5, name)
        para(c, desc, MARGIN + 140, y + 4, 560, FONTS["ui"], 8.2, LIGHT_THEME.muted, 10.5)
        y -= 40
    footer(c)


def page_spacing(c: Canvas) -> None:
    c.setFillColor(hex_color(LIGHT_THEME.page))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    title(c, "Spacing, Shape, and Depth", "The current rhythm is built from a centered shell, compact repeated gaps, soft radii, and restrained shadows. These values are the skeleton of the interface.", 5)

    label(c, "Layout tokens", MARGIN, 452, LIGHT_THEME.accent)
    layout_rows = [
        ("--content-width", "1160px", "shared centered shell"),
        ("--content-inset", "40px desktop, 24px mobile", "responsive page gutters"),
        ("--page-start-space", "36px desktop, 38px mobile", "top content start after header"),
        (".section", "40-58px desktop, 46px mobile", "vertical section rhythm"),
        (".grid", "3 columns / 16px gap", "standard desktop card grid"),
        ("mobile grid", "1 column below 920px", "natural card expansion"),
    ]
    y = 426
    for token, value, use in layout_rows:
        c.setFont(FONTS["mono_bold"], 9)
        c.setFillColor(hex_color(LIGHT_THEME.text))
        c.drawString(MARGIN, y, token)
        c.setFont(FONTS["mono"], 8.5)
        c.setFillColor(hex_color(LIGHT_THEME.accent))
        c.drawString(MARGIN + 178, y, value)
        c.setFont(FONTS["ui"], 8.5)
        c.setFillColor(hex_color(LIGHT_THEME.muted))
        c.drawString(MARGIN + 390, y, use)
        y -= 28

    label(c, "Radius scale", MARGIN, 230, LIGHT_THEME.accent)
    x = MARGIN
    for name, value in RADIUS.items():
        draw_round_rect(c, x, 168, 108, 42, LIGHT_THEME.surface, LIGHT_THEME.line, 4 if name == "xs" else 6 if name == "sm" else 8 if name == "md" else 12 if name == "lg" else 21)
        c.setFont(FONTS["ui_bold"], 8)
        c.setFillColor(hex_color(LIGHT_THEME.text))
        c.drawCentredString(x + 54, 192, name)
        c.setFont(FONTS["mono"], 8)
        c.setFillColor(hex_color(LIGHT_THEME.muted))
        c.drawCentredString(x + 54, 178, value)
        x += 122

    label(c, "Spacing scale", MARGIN, 136, LIGHT_THEME.accent)
    x = MARGIN
    for name, value in SPACING.items():
        h = float(value.replace("px", ""))
        c.setFillColor(hex_color(LIGHT_THEME.accent))
        c.rect(x, 78, 38, max(4, h), fill=1, stroke=0)
        c.setFont(FONTS["ui_bold"], 7)
        c.setFillColor(hex_color(LIGHT_THEME.text))
        c.drawCentredString(x + 19, 62, name)
        c.setFont(FONTS["mono"], 7)
        c.setFillColor(hex_color(LIGHT_THEME.muted))
        c.drawCentredString(x + 19, 50, value)
        x += 72

    draw_round_rect(c, 540, 268, 220, 128, LIGHT_THEME.surface, LIGHT_THEME.line, 12)
    label(c, "Shadow vocabulary", 558, 372, LIGHT_THEME.accent)
    para(c, "Ambient card: 0 18px 55px rgba(27,35,42,.08)<br/>Hover lift: 0 26px 68px rgba(27,35,42,.14)<br/>Night ambient: 0 20px 60px rgba(0,0,0,.24)<br/>Night hover: 0 28px 72px rgba(0,0,0,.42)", 558, 354, 178, FONTS["mono"], 7.2, LIGHT_THEME.text, 10)
    footer(c)


def page_reskin_map(c: Canvas) -> None:
    c.setFillColor(hex_color(LIGHT_THEME.page))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    title(c, "Reskin Mapping Checklist", "A practical map for changing the visual skin while preserving component meaning, accessibility, and editorial hierarchy.", 6)

    columns = [
        ("Keep Meaning", [
            "Accent remains action, link, current, and focus.",
            "Surface remains the primary repeated card color.",
            "Muted remains readable secondary copy, not disabled copy.",
            "Line remains subtle structure and section rhythm.",
            "Tags remain metadata, not primary CTAs.",
            "Serif hierarchy carries editorial authority.",
        ]),
        ("Replace Deliberately", [
            "Page and bg fields can change the whole atmosphere.",
            "Display font can shift tone fastest; test app names first.",
            "Surface contrast must support card scanning in both modes.",
            "Header opacity needs dark and light contrast checks.",
            "Category accent mixes should stay subtle.",
            "Shadow can be reduced, but hover affordance still needs a signal.",
        ]),
        ("Verify After Reskin", [
            "Light and dark palettes both pass body and muted contrast.",
            "App cards still link internally; app names link externally.",
            "Mobile RSS field aligns with its copy block.",
            "Header start spacing matches homepage rhythm.",
            "Reduced motion remains honored.",
            "No gradients are reintroduced unless explicitly chosen.",
        ]),
    ]

    x = MARGIN
    for heading, items in columns:
        draw_round_rect(c, x, 116, 228, 330, LIGHT_THEME.surface, LIGHT_THEME.line, 14)
        c.setFont(FONTS["display_bold"], 20)
        c.setFillColor(hex_color(LIGHT_THEME.text))
        c.drawString(x + 18, 412, heading)
        y = 374
        for item in items:
            c.setFillColor(hex_color(LIGHT_THEME.accent))
            c.circle(x + 23, y - 3, 2.5, fill=1, stroke=0)
            para(c, item, x + 34, y + 5, 170, FONTS["ui"], 9.4, LIGHT_THEME.muted, 12.2)
            y -= 43
        x += 248

    draw_round_rect(c, MARGIN, 52, 724, 42, DARK_THEME.bg, DARK_THEME.line, 12)
    para(c, "Reskin principle: change the clothing, keep the contract. Every new token should preserve a readable pair in light and dark modes and keep interaction states obvious without turning metadata into decoration.", MARGIN + 18, 79, 680, FONTS["ui_bold"], 10, DARK_THEME.text, 13)
    footer(c)


def build_pdf() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    c = Canvas(str(OUTPUT), pagesize=landscape(letter))
    for page in (page_overview, page_colors, page_typography, page_components, page_spacing, page_reskin_map):
        page(c)
        c.showPage()
    c.save()


if __name__ == "__main__":
    build_pdf()
    print(OUTPUT)
