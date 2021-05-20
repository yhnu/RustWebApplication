#[derive(serde::Deserialize)]
#[serde(tag = "command", rename_all = "camelCase")]
pub enum ApplicationOperation {
    /// The read text file API.
    GetCardByUuid {
        uuid: String,
    },
    GetCardsByName {
        name: String,
    },
    GetCardImage {
        uuid: String,
    },
}
