/*
Take this file as example for a menu, the format should be straight forward enough.
When I get some spare time I will write a menu editor.
If you don't want icons or tooltips ("hint"), just remove the line.
*/
[
    {
        text: "Troubleshoot",
        hint: "Help for troubled people",
        children: [
            {
                text: "Restart Cinnamon",
                icon: "view-refresh-symbolic",
                hint: "Restart Cinnamon if some setting requires a restart.",
                restart: true,
            },
            {
                text: "Reload Theme",
                icon: "view-refresh-symbolic",
                hint: "Reload Theme (useful for theme developers)",
                exec: "[reload-theme]",
                exec2: "notify-send --icon=gtk-add Reloaded \"The theme has been reloaded.\""
            },
            {
                text: "Looking Glass",
                icon: "folder-saved-search-symbolic",
                hint: "Cinnamon debugger",
                exec: "[looking-glass]",
            },
            {
                text: "Force Quit Application",
                icon: "process-stop-symbolic",
                hint: "A window just won't quit ? Use this to kill it.",
                exec: "${APPLET_DIR}/xkill.py",
                exec2: "notify-send --icon=gtk-add XKILL \"Click on the window/process you want to force close.\"",
            },
            {
                text: "Restore all settings to Default",
                icon: "edit-clear-all-symbolic",
                hint: "Are your cinnamon settings messed up beyond repair ?\nUse this to restore all settings to default.",
                exec: "gsettings reset-recursively org.cinnamon",
                prompt: "Are you sure you want to restore all settings to default?",
                restart: true,
            },
            {
                text: "Reset UReadAhead",
                icon: "edit-clear-all-symbolic",
                hint: "Is your boot sequence taking too long ?\nClick for more information.",
                exec: "gnome-terminal -x sudo rm /var/lib/ureadahead/*.pack /var/lib/ureadahead/pack",
                prompt: "Run this if your boot sequence takes too long.\nResetting UReadAhead will slow down the next couple of boots, but after that a speedup should be noticable.",
            },
        ]
    },
    {
        text: "Settings",
        hint: "Settings",
        children: [
            {
                text: "Applets",
                icon: "emblem-favorite-symbolic",
                hint: "Add or remove applets",
                exec: "cinnamon-settings applets",
            },
            {
                text: "Start up Applications",
                icon: "preferences-other-symbolic",
                hint: "Edit startup applications",
                exec: "gnome-session-properties",
            },
            {
                text: "Login Window",
                icon: "face-smile-symbolic",
                hint: "Configure the MDM login screen",
                exec: "gksu mdmsetup",
            },
            {
                text: "Cinnamon",
                icon: "preferences-desktop-wallpaper-symbolic",
                hint: "Configure Cinnamon Settings",
                exec: "cinnamon-settings",
            },
            {
                text: "System",
                icon: "system-run-symbolic",
                hint: "Configure System Settings",
                exec: "gnome-control-center",
            },
            {
                text: "Cinnamon Local Files",
                icon: "user-home-symbolic",
                hint: "The place where user downloaded applets, desklets and extensions are stored.",
                exec: "gnome-open ${HOME}/.local/share/cinnamon/",
            },
        ]
    },
    
    "separator",

    {
        text: "Software",
        hint: "Install, Uninstall or Update Software",
        children: [
            {
                text: "Synaptic",
                icon: "document-save-symbolic",
                hint: "Synaptic Package Manager",
                exec: "synaptic-pkexec",
            },
            {
                text: "Mint Software Manager",
                icon: "start-here-linux-mint-symbolic",
                hint: "Install Software",
                exec: "gksu mintinstall",
            },
            {
                text: "Check for updates",
                icon: "security-medium-symbolic",
                hint: "Check for updates",
                exec: "mintupdate",
            },
        ]
    },

    "separator",
    
    {
        text: "Panel Edit Mode",
        hint: "Toggle Panel Edit Mode",
        toggle: "panel-edit-mode",
    },
]

