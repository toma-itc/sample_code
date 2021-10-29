/*
 * @copyright Copyright 2018 TOMA Consultants Group Corporation.
 * @author TOMA Consultants Group Corporation.
 */

import * as kintoneLib from '../lib/kintoneLib';

(function () {
	"use strict";

	kintone.events.on(['app.record.create.submit', 'app.record.edit.submit', 'app.record.index.edit.submit'], async function(event: kintoneLib.KintoneEvent<kintone.types.SavedSampleApp>) {
		let record = event.record;

		// 対象のkintoneの項目が「undefined」「null」「空文字」で無い事を確認する。
		if (record.元の数値.value != undefined && record.元の数値.value != null && record.元の数値.value && record.元の数値.value != '') {
			// 項目「元の数値」を5倍にして、項目「カスタマイズで5倍にした数値」に格納する。
			record.カスタマイズで5倍にした数値.value = String(Number(record.元の数値.value) * 5);
		}

		return event;
	})

})();
