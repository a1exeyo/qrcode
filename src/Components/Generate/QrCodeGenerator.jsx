import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import s from './qrCodeGenerator.module.css';
import { GENERATE_DATA } from '../../constants'

export const QrCodeGenerator = () => {

	const [value, setValue] = useState('');
	const [result, setResult] = useState('');

	const onClickHandler = (event) => {
		setResult(value);
		setValue('');

		const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

		localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));
	};

	const onChangeHandler = (event) => {
		setValue(event.target.value);
		setResult('');
	};

	console.log(result);

	return (
		<div className={s.container}>
			{result !== '' &&  (
			<QRCodeSVG value={result} />
			)}
			<input type="text" value={value} onChange={onChangeHandler} placeholder="Введите текст" className={s.input} />
			<button type="button" onClick={onClickHandler} className={s.btn}>
				Сгенерировать QR
			</button>
		</div>
	);
}; 

