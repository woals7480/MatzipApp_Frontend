import {useEffect, useState} from 'react';

interface UseFormProp<T> {
  initialValue: T;
  validate: (values: T) => Record<keyof T, string>;
}

function useForm<T>({initialValue, validate}: UseFormProp<T>) {
  const [values, setValues] = useState(initialValue);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChangeText = (key: keyof T, value: string) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const handleBlur = (key: keyof T) => {
    setTouched({
      ...touched,
      [key]: true,
    });
  };

  const getTextInputProps = (key: keyof T) => {
    const value = values[key];
    const onChangeText = (value: string) => handleChangeText(key, value);
    const onBlur = () => handleBlur(key);

    return {value, onChangeText, onBlur};
  };

  useEffect(() => {
    const newErrors = validate(values);
    setErrors(newErrors);
  }, [values]);

  return {values, errors, touched, getTextInputProps};
}

export default useForm;
