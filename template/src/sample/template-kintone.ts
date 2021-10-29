/*
 * @copyright Copyright 2018 TOMA Consultants Group Corporation.
 * @author TOMA Consultants Group Corporation.
 */

import * as kintoneLib from '../lib/kintoneLib';

(function () {
	"use strict";

	kintone.events.on(['app.record.index.show'], async function(event: kintoneLib.KintoneIndexEvent<any>) {

	})

	kintone.events.on(['app.record.create.show', 'app.record.edit.show', 'app.record.index.edit.show'], async function(event: kintoneLib.KintoneEvent<any>) {
		let record = event.record;

		return event;
	})

	kintone.events.on(['app.record.create.submit', 'app.record.edit.submit', 'app.record.index.edit.submit'], async function(event: kintoneLib.KintoneEvent<any>) {
		let record = event.record;

		return event;
	})

	kintone.events.on(['app.record.create.submit.success', 'app.record.edit.submit.success', 'app.record.index.edit.submit.success'], async function(event: kintoneLib.KintoneEvent<any>) {
		let record = event.record;

		return event;
	})

	kintone.events.on(['app.record.detail.show'], function(event: kintoneLib.KintoneEvent<any>) {
		let record = event.record;

		return event;
	})


})();
