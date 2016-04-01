# Version Information for Bookmarklets

A version ID and version logging has been added to the bookmarklets-library repository, to facilitate issue tracking. This information is currently available from the browser console.

## Launching the Browser Console

Viewing the version log messages requires opening the Browser Console and selecting the ‘Console’ tab. In some browsers you also have to select ‘Logging’. The way to open the console varies depending on the browser.

### Windows

* Internet Explorer:      ```F12```
* Firefox:                ```Ctrl-Shift-K```
* Chrome:                 ```Ctrl-Shift-I```

With IE, the console must be open when the page loads to see log messages, so you may have to reload the page before messages are displayed.

### Mac OS X

* Firefox:                ```Cmd-Shift-J```
* Chrome:                 ```Cmd-Option-J```
* Safari:                 ```Cmd-Option-C```

## When Log Messages are Displayed

The log message for each bookmarklet only displays once per page load and bookmarklet invocation. In other words, you will only see each message once, no matter how many times you toggle a particular bookmarklet on and off, until the page is reloaded or another page is loaded.

## Log Message Format

The format of log messages is ```<organization/project>``` ```<version>``` ```<bookmarklet name>```. For example,

* ```oaa-tools/bookmarklets : v0.2.2 : Landmarks```
* ```oaa-tools/bookmarklets : v0.2.2 : Headings```
