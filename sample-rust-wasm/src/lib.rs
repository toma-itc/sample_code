mod console;

#[macro_use]
extern crate wasm_bindgen;

#[macro_use]
extern crate serde;
extern crate serde_derive;
extern crate serde_json;

use std::collections::HashMap;
use wasm_bindgen::prelude::*;

#[derive(Serialize, Deserialize, Debug)]
pub struct Foo {
    bar: HashMap<String, String>
}

#[wasm_bindgen]
pub fn hello_message() -> Result<(), JsValue> {
  console::log("Hello World.");

  Ok(())
}

#[wasm_bindgen]
pub fn test_json(x: String) -> String {
    let dec: Foo = serde_json::from_str(&x).unwrap();
    console::log(&x);
    // println!("{:?}", dec);

    let mut baz = HashMap::new();
    baz.insert("testA".to_owned(), "testB".to_owned());
    let foo = Foo { bar: baz };
    serde_json::to_string(&foo).unwrap()
}

