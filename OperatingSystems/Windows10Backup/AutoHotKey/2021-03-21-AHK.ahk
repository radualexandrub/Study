#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

	; List of keyboard buttons
; ^ = Control
; + = Shift
; ! = Alt
; # = Win (Windows key)

	; Set CapsLock state always off
SetCapsLockState, AlwaysOff
Return

Alt & CapsLock::
If GetKeyState("CapsLock","T")
  SetCapsLockState, AlwaysOff
Else
  SetCapsLockState, On
Return

	; List of mouse buttons
; LButton, RButton, MButton
; XButton1 = 4th mouse button. Typically performs the same function as Browser_Back
; XButton2 = 5th mouse button. Typically performs the same function as Browser_Forward.
; WheelDown, WheelUp
; WheelLeft, WheelRight (not real buttons, but you can assign as hotkey to scroll left/right)


	; Mouse Macros
; LCtrl & MButton::Run notepad.exe, WinActivate notepad.exe 	; Open and focus on notepad.exe
; LCtrl & XButton1::Run notepad.exe, WinActivate notepad.exe 	; Open and focus on notepad.exe

XButton1::Media_Play_Pause
XButton1 & WheelUp::Volume_Up
XButton1 & WheelDown::Volume_Down
XButton1 & MButton::Send {PrintScreen}  ; Take screenshot
XButton1 & LButton::Send, ^c             ; Copy
XButton1 & RButton::Send, ^v             ; Paste
Ctrl & XButton1::DllCall("PowrProf\SetSuspendState", "int", 0, "int", 0, "int", 0)

; XButton2 & WheelUp::WheelLeft
; XButton2 & WheelDown::WheelRight

XButton2 & WheelUp::^+Tab               ; Scroll through Browser tabs
XButton2 & WheelDown::^Tab

XButton2::^t 				; New tab
XButton2 & RButton::^w			; Close current tab
XButton2 & MButton::^+t 		; Reopen last tab
XButton2 & LButton::			; Search currently selected text on Google
{
  Send, ^c
  Sleep 200
  If InStr(clipboard, "http")
    Run, %clipboard%
  Else
    Run, https://www.google.com/search?q=%clipboard%
  Return
}

^MButton::Send, #e                      ; MouseCtrl+MiddleClick to open explorer


	; Arrow keys as Home/End
RAlt & Left::
{
  If GetKeyState("Shift", "P")
    Send +{Home}
  Else
    Send {Home}
  Return
}
RAlt & Right::
{
  If GetKeyState("Shift", "P")
    Send +{End}
  Else
    Send {End}
  Return
}

	; IJKL as Arrow Keys
RAlt & J::
{
  If GetKeyState("Ctrl", "P") && GetKeyState("Shift", "P")
    Send ^+{Left}
  Else If GetKeyState("Ctrl", "P")
    Send ^{Left}
  Else If GetKeyState("Shift", "P")
    Send +{Left}
  Else
    Send {Left}
  Return
}
RAlt & L::
{
  If GetKeyState("Ctrl", "P") && GetKeyState("Shift", "P")
    Send ^+{Right}
  Else If GetKeyState("Ctrl", "P")
    Send ^{Right}
  Else If GetKeyState("Shift", "P")
    Send +{Right}
  Else
    Send {Right}
  Return
}
RAlt & I::
{
  If GetKeyState("Ctrl", "P") && GetKeyState("Shift", "P")
    Send ^+{Up}
  Else If GetKeyState("Ctrl", "P")
    Send ^{Up}
  Else If GetKeyState("Shift", "P")
    Send +{Up}
  Else
    Send {Up}
  Return
}
RAlt & K::
{
  If GetKeyState("Ctrl", "P") && GetKeyState("Shift", "P")
    Send ^+{Down}
  Else If GetKeyState("Ctrl", "P")
    Send ^{Down}
  Else If GetKeyState("Shift", "P")
    Send +{Down}
  Else
    Send {Down}
  Return
}


	; Keyboard Wheel for scrolling
Alt & Volume_Up::WheelUp 		; aparent cu LShift nu merge, iar cu LControl face direct zoom
Alt & Volume_Down::WheelDown
; Alt & WheelUp::Volume_Up 		; use Alt+MouseWheel to adjust volume
; Alt & WheelDown::Volume_Down


	; Run apps 
^+!1::Run "https://www.google.com"      ; use ctrl+shift+alt+1
^+!t:: Run powershell, C:\Users\Radu    ; use ctrl+shift+alt+t to run Powershell

^#1::Run "https://mail.google.com/mail/u/0/#inbox"   ; use ctrl+win+1
^#2::Run "https://mail.google.com/mail/u/1/#inbox"   ; use ctrl+win+2
^#3::Run "https://translate.google.ro/?hl=ro&tab=wT" ; use ctrl+win+3

^!1::Run "https://dev.to"               ; use ctrl+alt+1
^!2::Run "https://www.google.com/search?q=vremea+bucuresti"
^!t::Run cmd, C:\Users\Radu             ; use ctrl+alt+t to run Cmd
^!w::Run winamp.exe                     ; use ctrl+alt+w to run Winamp
^!s::Run C:\Program Files\Sublime Text 3\sublime_text.exe

^!p::                                  ; use ctrl+alt+p
{                                      ; to open cmd prompt in ipython
  Run cmd, C:\Users\Radu
  Sleep 150
  Send, ipython
  Sleep 150
  Send, {Enter}
  Return
}

^!u::                                   ; use ctrl+alt+u 
{                                       ; to open cmd in current folder
  Send, !d
  Sleep 50
  Send, ^c
  Sleep 100
  Run cmd, %clipboard%
  Return
}

^!+u::                                  ; use ctrl+alt+shift+u
{                                       ; to open cmd in current folder and run git status
  Send, !d
  Sleep 50
  Send, ^c
  Sleep 100
  Run cmd, %clipboard%
  Sleep 100
  Send, git status
  Sleep 100
  Send, {Enter}
  Return
}

^!j::                                  ; use ctrl+alt+j
{                                      ; to open jupyter notebook in g: in tf_gpu conda env
  Run cmd, g:
  Sleep 100
  Send, activate tf_gpu
  Sleep 1000
  Send, {Enter}
  Send, jupyter notebook
  Sleep 2000
  Send, {Enter}
  Return
}

^#e::                                  ; use ctrl+win+e 
{                                      ; to open new explorer window with the same selected folder
  Send, !d
  Sleep 50
  Send, ^c
  Sleep 100
  Run, Explorer "%clipboard%" 
  Return
}

^+#e::                                  ; use ctrl+shift+win+e 
{                                       ; to open new explorer window with the same selected folder
  Send, #{Left}
  Sleep 50  
  Send, !d
  Sleep 50
  Send, ^c
  Sleep 100
  Run, Explorer "%clipboard%"
  Sleep 900
  Send, !{Up}
  Sleep 600
  Send, #{Right}
  Return
}

; Copy to clipboard the HEX color of the pixel under your cursor using Win+c
#c::
{
  MouseGetPos, MouseX, MouseY
  PixelGetColor, color, %MouseX%, %MouseY%, RGB
  StringLower, color, color
  clipboard := SubStr(color, 3)
  Return
}

; Copy to clipboard the HEX color of the pixel under your cursor using CTRL+Win+LeftClick
^#LButton::
{
  MouseGetPos, MouseX, MouseY
  PixelGetColor, color, %MouseX%, %MouseY%, RGB
  StringLower, color, color
  clipboard := SubStr(color, 3)
  Return
}

; ^!+z::                                  ; use ctrl+alt+shift+z
; {                                       ; copy current link in focused browser, paste it in opened text editor
;   Send, !d                              ; focus the text editor then focus back browser before using it
;   Sleep 100                             ; this script is useful to generate Markdown table of contents
;   Send, ^c
;   Sleep 200
;   Send, {Alt down}
;   Sleep 50
;   Send, {Tab}{Alt up}
;   Sleep 150
;   Send, ^v
;   Sleep 100
;   Send, {Enter}
;   Sleep 50
;   Return
; }

	; Other shortcuts
RCtrl & Backspace::Browser_Back

	; Put PC in sleep mode
RAlt & Pause::DllCall("PowrProf\SetSuspendState", "int", 0, "int", 0, "int", 0)

	; Empty recycle bin
#Del::FileRecycleEmpty ; use win+del

	; Google Search selected text with keyboard
+!c:: ; use shift+alt+c
{
  Send, ^c
  Sleep 50
  Run, http://www.google.com/search?q=%clipboard%
  Return
}

; Unsplash Stock Photos Search with selected text 
^#u:: ; use ctrl+win+u
{
  Send, ^c
  Sleep 50
  ; clipboard := StrReplace(clipboard, " ", "-")
  Run, https://unsplash.com/s/photos/%clipboard%
  Return
}

; Pexels Stock Photos Search with selected text 
^#p:: ; use ctrl+win+p
{
  Send, ^c
  Sleep 50
  ; clipboard := StrReplace(clipboard, " ", "%20")
  Run, https://www.pexels.com/search/%clipboard%
  Return
}


	; Hotstrings
	; Hotstring with Enter/Spacebar Required after
::<a>::
{
  Send, <a name=""></a>{Shift Down}{Left}{Left}{Left}{Left}{Shift Up}
  Sleep 50
  Send, ^x{End}
  Sleep 50
  Send, ^v
  Return
}

	; JavaScript HotStrings
::forjs::{Raw}for (let i = 0; i < arr.length; i++) {
::ifjs::{Raw}if () {

	; PHP Hotstrings
::forphp::{Raw}for ($i = 0; $i < count($arr); $i++) {

	; Python HotStrings
::forpy::for i in range(0, len(arr)):
::ifelsepy::
(
if condition1:

else:

)
::ifelseifpy::
(
if condition1:

elif condition2:

else:
)

	; Hotstring without Enter/Spacebar Required after
:*:logjs::
{
Send, console.log();{Left}{Left}
Return
}
:*:tablejs::
{
Send, console.table();{Left}{Left}
Return
}

:*:printjava::
{
Send, System.out.println();{Left}{Left}
Return
}

:*:writec#::
{
Send, Console.WriteLine();{Left}{Left}
Return
}

:*:forcpp::
(
for (int i = 0; i < n; i++) {
)
:*:printc::printf('%d\n', num);

; Matlab
:*:printmat::fprintf('%d\n', num);
:*:formatlab::
(
for i = 1:step:Nlength
   
end
)



:*:datetoday::
{
  FormatTime, DateString, , yyyy-MM-dd
  Send %DateString%
  Return
}

:*:datenow::
{
  FormatTime, DateString, , dddd, MMMM dd, yyyy
  Send %DateString%
  Return
}

:*:timenow::
{
  FormatTime, DateString, , HH:mm
  Send %DateString%
  Return
}

:*:datetimenow::
{
  FormatTime, DateString, , dddd, MMMM dd, yyyy, HH:mm
  Send %DateString%
  Return
}

:*:datetmr::
{
  Date += 1, Days
  FormatTime, DateString, %Date%, yyyy-MM-dd
  Send %DateString%
  VarSetCapacity(Date, 0)
  Return
}

:*:writelorem2::
{
  Clipboard := "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor molestie volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porttitor placerat eleifend. Suspendisse tincidunt sapien quam, vel aliquam felis maximus id. Ut id pellentesque metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id lacus vitae massa euismod rhoncus nec id tellus."
  Send, ^v{Enter}
  Sleep 200
  Clipboard := "Aenean tincidunt, nunc sit amet scelerisque consequat, eros turpis venenatis nisi, et dictum orci libero et felis. Quisque et dictum urna. Sed hendrerit blandit arcu eu accumsan. Ut elementum urna quis enim vestibulum malesuada. Donec sit amet orci faucibus, dignissim lorem volutpat, auctor lectus. Vivamus luctus odio quam, eu rhoncus tortor tempus sit amet. Suspendisse non laoreet augue, eget vestibulum ante. Quisque consectetur consectetur lobortis. Mauris porttitor iaculis lobortis. Nullam egestas ac arcu at porta. Maecenas bibendum nec neque id tristique. Aliquam erat volutpat. Sed vel cursus nisl."
  Send, ^v
  Clipboard := ""
  Return
}

:*:writelorem3::
{
  Clipboard := "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor molestie volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porttitor placerat eleifend. Suspendisse tincidunt sapien quam, vel aliquam felis maximus id. Ut id pellentesque metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id lacus vitae massa euismod rhoncus nec id tellus."
  Send, ^v{Enter}
  Sleep 200
  Clipboard := "Aenean tincidunt, nunc sit amet scelerisque consequat, eros turpis venenatis nisi, et dictum orci libero et felis. Quisque et dictum urna. Sed hendrerit blandit arcu eu accumsan. Ut elementum urna quis enim vestibulum malesuada. Donec sit amet orci faucibus, dignissim lorem volutpat, auctor lectus. Vivamus luctus odio quam, eu rhoncus tortor tempus sit amet. Suspendisse non laoreet augue, eget vestibulum ante. Quisque consectetur consectetur lobortis. Mauris porttitor iaculis lobortis. Nullam egestas ac arcu at porta. Maecenas bibendum nec neque id tristique. Aliquam erat volutpat. Sed vel cursus nisl."
  Send, ^v{Enter}
  Sleep 200
  Clipboard := "Vivamus tellus purus, facilisis sit amet elit quis, sagittis ultricies erat. Aenean non ante porta urna accumsan feugiat vitae tincidunt mi. Fusce est ante, imperdiet a lorem mattis, pulvinar tincidunt odio. Donec non tincidunt augue. Suspendisse erat nisl, suscipit vitae est non, consectetur semper lacus. Mauris sit amet nisi eu massa vehicula bibendum et id mi. Morbi pharetra augue a lorem elementum, a fringilla felis ultrices. Mauris in bibendum nibh, sed vehicula nisi. Praesent sit amet est ac lorem dictum fringilla. In feugiat feugiat nisi, eget faucibus magna auctor non."
  Send, ^v
  Clipboard := ""
  Return
}





	; CapsLock + WASD as Arrow Keys
CapsLock & A::
{
  If GetKeyState("RAlt", "P")
    Send {Home}
  Else If GetKeyState("Ctrl", "P") && GetKeyState("Shift", "P")
    Send ^+{Left}
  Else If GetKeyState("Ctrl", "P")
    Send ^{Left}
  Else If GetKeyState("Shift", "P")
    Send +{Left}
  Else
    Send {Left}
  Return
}
CapsLock & D::
{
  If GetKeyState("RAlt", "P")
    Send {End}
  Else If GetKeyState("Ctrl", "P") && GetKeyState("Shift", "P")
    Send ^+{Right}
  Else If GetKeyState("Ctrl", "P")
    Send ^{Right}
  Else If GetKeyState("Shift", "P")
    Send +{Right}
  Else
    Send {Right}
  Return
}
CapsLock & W::
{
  If GetKeyState("Ctrl", "P") && GetKeyState("Shift", "P")
    Send ^+{Up}
  Else If GetKeyState("Ctrl", "P")
    Send ^{Up}
  Else If GetKeyState("Shift", "P")
    Send +{Up}
  Else
    Send {Up}
  Return
}
CapsLock & S::
{
  If GetKeyState("Ctrl", "P") && GetKeyState("Shift", "P")
    Send ^+{Down}
  Else If GetKeyState("Ctrl", "P")
    Send ^{Down}
  Else If GetKeyState("Shift", "P")
    Send +{Down}
  Else
    Send {Down}
  Return
}

	; Alt + [;'/ as Arrow Keys
Alt & VKBA:: ; ; as arrow left
{
  Send {Left}
  Return
}
Alt & VKDE:: ; ' as arrow right
{
  Send {Right}
  Return
}
Alt & VKDB:: ; [ as arrow up
{
  Send {Up}
  Return
}
Alt & SC035:: ; / as arrow down
{
  Send {Down}
  Return
}

