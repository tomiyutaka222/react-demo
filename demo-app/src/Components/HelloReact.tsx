import React from 'react';

/**
 * React.jsは関数単位でコンポーネントを定義します
 * ・外部ファイルでの読み込みをする場合、exportを先頭につける
 * ・呼び出したいファイルでこのtsxファイルごと呼び出す
 * 
 * @returns Component 
 */
 export function HelloReact() {
    return (
      <div>
        <h1>HelloReact</h1>
        <p>ハローワールドコンポーネントです。</p>
      </div>
    );
  }

  export function HelloAAAAAA() {
    return (
      <div>
        <h1>HelloAAAAAA</h1>
        <p>ハローワールドコンポーネントです。</p>
      </div>
    );
  }