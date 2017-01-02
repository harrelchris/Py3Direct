// ==UserScript==
// @name         Py3Direct
// @name:en      Py3Direct
// @namespace    https://greasyfork.org/en/users/88414-chris-harrel
// @description  Replaces text in the url to automatically redirect from Py 2 docs to Py 3
// @version      0.3
// @author       Chris Harrel // harrechris@gmail.com // github.com/harrelchris
// @include      *docs.python.org/*
// ==/UserScript==

if (/2\.\d?/.test(window.location.href)){
    window.location = window.location.href.replace(/2\.\d?/, '3.5');
} else if (window.location.href.includes('docs.python.org/2/')){
    window.location = window.location.href.replace('docs.python.org/2/', 'docs.python.org/3/');
}
