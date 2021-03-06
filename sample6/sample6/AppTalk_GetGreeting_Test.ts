﻿import assert = require('assert');
import apptalk = require('./app-talk');

export function AppTalk_GetGreeting_Test() {
    assert.equal(apptalk.App.Talk.GetGreeting
        (new Date(2018, 0, 1, 0, 0, 0, 0)), "Welcome back!");
    assert.equal(apptalk.App.Talk.GetGreeting
        (new Date(2018, 0, 1, 4, 59, 59, 999)), "Welcome back!");
    assert.equal(apptalk.App.Talk.GetGreeting
        (new Date(2018, 0, 1, 5, 0, 0, 0)), "Good morning!");
    assert.equal(apptalk.App.Talk.GetGreeting
        (new Date(2018, 0, 1, 11, 59, 59, 999)), "Good morning!");
    assert.equal(apptalk.App.Talk.GetGreeting
        (new Date(2018, 0, 1, 12, 0, 0, 0)), "Good afternoon!");
    assert.equal(apptalk.App.Talk.GetGreeting
        (new Date(2018, 0, 1, 15, 59, 59, 999)), "Good afternoon!");
    assert.equal(apptalk.App.Talk.GetGreeting
        (new Date(2018, 0, 1, 16, 0, 0, 0)), "Good evening!");
    assert.equal(apptalk.App.Talk.GetGreeting
        (new Date(2018, 0, 1, 21, 59, 59, 999)), "Good evening!");
    assert.equal(apptalk.App.Talk.GetGreeting
        (new Date(2018, 0, 1, 22, 0, 0, 0)), "Welcome back!");
    assert.equal(apptalk.App.Talk.GetGreeting
        (new Date(2018, 0, 1, 23, 59, 59, 999)), "Welcome back!");
}
