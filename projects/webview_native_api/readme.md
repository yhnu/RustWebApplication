# Rust Launcher

## COM Problems

Many libraries initialize call `CoInitializeEx`. This initializes COM, but if it's called with different parameters each time, the return value will not be SUCCESS.

I modified webview_rust here, where `COINIT_APARTMENTTHREADED | COINIT_DISABLE_OLE1DDE` used to be `0`.

```
bool embed(HWND wnd, bool debug, msg_cb_t cb) override {
    CoInitializeEx(nullptr, COINIT_APARTMENTTHREADED | COINIT_DISABLE_OLE1DDE);
    std::atomic_flag flag = ATOMIC_FLAG_INIT;
```

## DPI Awareness

I had to modify the webview_rust for high-dpi monitors. Normally, you would do that in the application manifest which is embedded in the windows binary. Rust does not support that ATM.

https://docs.microsoft.com/en-us/windows/win32/hidpi/setting-the-default-dpi-awareness-for-a-process

I added the last line here.

```
m_window = CreateWindow("webview", "", WS_OVERLAPPEDWINDOW, CW_USEDEFAULT,
                        CW_USEDEFAULT, 640, 480, nullptr, nullptr,
                        GetModuleHandle(nullptr), nullptr);
SetWindowLongPtr(m_window, GWLP_USERDATA, (LONG_PTR)this);
SetProcessDpiAwarenessContext(DPI_AWARENESS_CONTEXT_PER_MONITOR_AWARE_V2);
```
