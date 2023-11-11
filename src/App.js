import logo from './logo.svg';
import './App.css';

export const App = () => {
	// Императивный стиль : получение текущего года
	const currentYear = new Date().getFullYear();
	// Декларативный стиль: описание структуры интерфейса с использованием JSX.
	return (
		<div className="App">
			<header className="App-header">
				{/* Декларативный стиль: использование изображения для логотипа. */}
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					{/* Декларативный стиль: описание текста. */}
					Edit <code>src/App.js</code> and save to reload.
				</p>
				{/* Декларативный стиль: создание ссылки. */}
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>
					{/* Декларативный стиль: вывод текущего года. */}
					<code>{currentYear}</code>
				</p>
			</header>
		</div>
	);
};
