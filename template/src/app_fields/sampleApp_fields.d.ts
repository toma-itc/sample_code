declare namespace kintone.types {
  interface SampleApp {
    カスタマイズで5倍にした数値: kintone.fieldTypes.Number;
    元の数値: kintone.fieldTypes.Number;
  }
  interface SavedSampleApp extends SampleApp {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    更新日時: kintone.fieldTypes.UpdatedTime;
    作成日時: kintone.fieldTypes.CreatedTime;
  }
}
