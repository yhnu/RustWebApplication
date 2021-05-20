#[derive(serde::Deserialize)]
#[serde(tag = "command", rename_all = "camelCase")]
pub enum Command {
    /// The read text file API.
    Print {
        message: String,
    },
    FileDialog,
    ReadFile {
        filename: String,
    },
}
