import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
};

// 이 코드는 React 함수형 컴포넌트에서 사용되는 사용자 정의 훅인 `useDebounce`를 정의합니다. 이 훅은 입력값의 디바운스 처리를 위해 사용됩니다. 디바운스란 입력값의 변경을 감지하여 일정 시간 동안 대기한 후에 처리하는 기술입니다. 주로 사용자가 입력하는 값이나 검색어 등을 실시간으로 처리할 때 유용합니다.

// 이 코드에서 `useDebounce` 훅은 두 가지 매개변수를 받습니다:

// - `value`: 디바운스할 대상 값입니다.
// - `delay`: 디바운스의 대기 시간을 나타내는 밀리초 단위의 값입니다.

// 훅은 `useState` 훅을 사용하여 `debounceValue` 상태를 관리합니다. `debounceValue`는 디바운스된 값으로, 초기값은 `value`로 설정됩니다.

// `useEffect` 훅을 사용하여 `value`나 `delay`가 변경될 때마다 디바운싱을 적용합니다. `setTimeout` 함수를 사용하여 지정된 `delay` 시간이 지난 후에 `setDebounceValue`를 호출하여 `debounceValue`를 업데이트합니다. 또한, 이전의 `setTimeout` 핸들러를 제거하기 위해 `useEffect`의 clean-up 함수에서 `clearTimeout`을 호출합니다.

// 마지막으로, `useDebounce` 훅은 디바운스된 값을 반환합니다. 이 값은 지정된 딜레이 이후에 변경되는 것에 유의하세요.
