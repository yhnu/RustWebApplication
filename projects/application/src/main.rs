mod application;
mod database;

use application::application::handle_application;
use webview_native_api::provide_native_api;
use webview_official;

pub fn provide_api(webview: &mut webview_official::Webview) {
    // Create a copy that can be moved from!
    let w = webview.clone();
    webview.bind(
        "__application__",
        webview_native_api::create_handler(w, handle_application),
    );
}

fn main() {
    let builder = webview_official::WebviewBuilder::new();

    let mut webview = builder
        .debug(true)
        .width(1024)
        .height(768)
        .resize(webview_official::SizeHint::FIXED)
        .url("https://www.baidu.com")
        // .url("http://localhost:4040")
        .build();

    provide_native_api(&mut webview);

    provide_api(&mut webview);
    webview.run();
}
