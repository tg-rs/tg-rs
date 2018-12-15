/// Telegram Integer type
pub type Integer = i64;

/// Telegram Float type
pub type Float = f32;

/// Send Markdown or HTML,
/// if you want Telegram apps to show
/// bold, italic, fixed-width text or
/// inline URLs in the media caption.
#[derive(Debug, Deserialize, Serialize)]
pub enum ParseMode {
    /// HTML
    Html,
    /// Markdown
    Markdown,
}
