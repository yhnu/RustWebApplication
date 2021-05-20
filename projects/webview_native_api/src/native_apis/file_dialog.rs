// use nfd::{open_file_dialog, Response};
// use wfd::{open_dialog, DialogError, DialogParams};

pub fn file_dialog() -> Result<String, String> {
    let result = nfd::open_file_dialog(None, None).unwrap();
    match result {
        nfd::Response::Okay(filepath) => Ok(filepath),
        _ => Err(String::from("Something went wrong")),
    }
}

// pub fn file_dialog() -> Result<String, String> {
//     // This is normally failing because it Calls CoInitializeEd,
//     // but that was already called by the webview.
//     // I modded wfd to not call that function.
//     let params = wfd::DialogParams {
//         title: "My custom open file dialog",
//         file_types: vec![("Text files", "*.txt")],
//         ..Default::default()
//     };
//     let result = wfd::open_dialog(params);
//     match result {
//         Ok(open_result) => {
//             let open_file = open_result
//                 .selected_file_path
//                 .into_os_string()
//                 .into_string()
//                 .unwrap();
//             println!("Open file {}", open_file);
//             Ok(open_file)
//         }
//         Err(open_err) => match open_err {
//             wfd::DialogError::HResultFailed {
//                 error_method,
//                 hresult,
//             } => {
//                 println!("{}", error_method);
//                 println!("{}", hresult);
//                 Err("User Cancelled".to_string())
//             }
//             UserCancelled => {
//                 println!("User Cancelled");
//                 Err("User Cancelled".to_string())
//             }
//         },
//     }
// }
