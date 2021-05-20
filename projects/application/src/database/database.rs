use rusqlite::*;

#[derive(Debug, Clone, serde::Serialize)]
pub struct Card {
    pub name: String,
    pub uuid: String,
    pub scryfall_id: String,
}

pub fn read_card_by_uuid(card_uuid: &str) -> Result<Card> {
    let conn = rusqlite::Connection::open(
        "C:\\Users\\Matthew\\Documents\\GitHub\\webview_application\\deps\\AllPrintings.sqlite",
    )?;

    let q = std::fmt::format(format_args!(
        "SELECT name, uuid, scryfallId  FROM cards WHERE uuid='{}'",
        card_uuid
    ));
    let mut result = conn.prepare(&q)?;

    let mut iter = result.query_map(params![], |row| {
        Ok(Card {
            name: row.get(0)?,
            uuid: row.get(1)?,
            scryfall_id: row.get(2)?,
        })
    })?;

    let first_result = iter.nth(0);
    match first_result {
        Some(card) => Ok(card.unwrap().clone()),
        None => Err(rusqlite::Error::QueryReturnedNoRows),
    }
}

pub fn read_cards_by_name(card_name: &str) -> Result<Vec<Card>> {
    let conn = rusqlite::Connection::open(
        "C:\\Users\\Matthew\\Documents\\GitHub\\webview_application\\deps\\AllPrintings.sqlite",
    )?;
    let query_name = card_name.to_ascii_lowercase();
    let q = std::fmt::format(format_args!(
        "SELECT name, uuid, scryfallId  FROM cards WHERE name='{}' COLLATE NOCASE",
        query_name
    ));
    let mut result = conn.prepare(&q)?;

    let iter = result.query_map(params![], |row| {
        Ok(Card {
            name: row.get(0)?,
            uuid: row.get(1)?,
            scryfall_id: row.get(2)?,
        })
    })?;

    let mut result = Vec::new();
    for elem in iter {
        result.push(elem.unwrap().clone());
    }

    if result.len() == 0 {
        Err(rusqlite::Error::QueryReturnedNoRows)
    } else {
        Ok(result)
    }
}
