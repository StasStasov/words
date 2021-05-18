import React, { useState } from 'react'
import styles from './Home.module.css'
import RadioGroup from '../Radio/RadioGroup'
import Radio from '../Radio/Radio'
import Button from '../Button/Button'
import Toggle from '../Toggle/Toggle'

const mock = {
  success: 'успех',
  attract: 'привлекать',
  explain: 'объяснять',
  offer: 'предлогать',
  advice: 'совет',
  agree: 'согласие',
  decision: 'решение',
  adult: 'взрослый',
  'look for': 'искать',
  find: 'находить',
  exercise: 'упражнение',
  prefer: 'предпочитаешь',
  'depend on': 'зависить от',
  'get to': 'добираться до',
  complain: 'жаловаться',
  refuse: 'отказываться',
  criticize: 'критиковать',
  disagree: 'не соглашаться',
  statement: 'утверждение',
  'with great pleasure': 'с большим удовольствием',
  inspire: 'вдохновлять',
  mention: 'упоминать',
  promise: 'обещать',
  worry: 'беспокоиться',
  order: 'приказывать',
  useless: 'бесполезный',
  useful: 'полезный',
  different: 'различие',
  'sure, certain(сётен)': 'уверенный',
  kind: 'добрый',
  rich: 'богатый',
  poor: 'бедный',
  obvious: 'очевидно',
  possible: 'возможно',
  worse: 'хуже',
  expensive: 'дорого',
  cheap: 'дешего',
  'clever, smart': 'умный',
  wise: 'мудрый',
  'hard-working': 'трудолюбие',
  'at the moment': 'в данный момент',
  wonderful: 'прекрасный',
  responsibility: 'ответственность',
  windy: 'ветренный',
  sunny: 'солнечно',
  rainy: 'дождливо',
  warm: 'тепло',
  assure: 'уверять',
  married: 'женат',
  tired: 'уставший',
  angry: 'злой',
  sad: 'грусть',
  wrong: 'неправ',
  'colleagues (колигс)': 'коллеги',
  far: 'далеко',
  near: 'близко',
  reveal: 'разоблачать, показывать',
  cause: 'причина',
  discord: 'разлад, раздор',
  mood: 'настроение',
  increasingly: 'в большей степени',
  'figure out': 'вычислять, понимать',
  opinion: 'мнение',
  'flat, apartment': 'квартира',
  dangerous: 'опасно',
  article: 'статья, артикль',
  whole: 'весь',
  'the nearest': 'ближайший',
  trousers: 'брюки',
  describe: 'описывать',
  behaviour: 'поведение',
  trip: 'путешествие',
  manner: 'манера',
  satisfied: 'удовлетворен',
  pencil: 'карандаш',
  passion: 'страсть',
  against: 'против',
  'glad to see': 'рад видеть',
  afraid: 'боящийся',
  introduced: 'вносить',
  'vice versa': 'наоборот',
  particular: 'определенный, отдельный',
  'laugh at it/him': 'смеятся над этим/ним',
  enjoy: 'наслаждаться',
  foreign: 'иностранный',
  area: 'область',
  'waste of time': 'потеря времени',
  dream: 'мечта',
  choice: 'выбор',
  necessary: 'необходимо',
  compare: 'сравнивать',
  subject: 'предмет',
  'adapt to': 'адаптироваться к',
  conditions: 'условия',
  surprising: 'удивительно',
  'convenient for me': 'удобно для меня (н.р время)',
  'comfortable for me': 'удобно для меня (н.р стул)',
  chair: 'стул',
  armchair: 'кресло',
  clear: 'ясно, понятно',
  communicate: 'общаться',
  elementary: 'элементарный',
  salary: 'зарплата',
  cost: 'стоит',
  price: 'цена',
  much: "много (I don't know much)",
  'a lot': 'много (I know a lot)',
  'furniture (фенэча)': 'мебель',
  advertising: 'реклама (как понятие)',
  advertisement: 'реклама (конкретн)',
  'write it down': 'записывать',
  polite: 'вежливый',
  replay: 'ответ (формальный)',
  compete: 'соревноваться, конкурировать',
  'be fond of': 'обожать',
  unusual: 'необычно',
  'meaning of': 'значение этого',
  'elder/younger': 'старший/младший',
  phrase: 'фраза',
  expression: 'выражение',
  'by tomorrow': 'к завтрашнему',
  each: 'каждый',
  'each other': 'друг друга',
  separately: 'раздельно',
  'be interested in': 'заинтиресован в',
  'be keen on': 'увлекаюсь (чем-то)',
  celebrate: 'праздновать',
  frighten: 'пугать',
  nowadays: 'на сегодняшний день',
  admire: 'восхищаешься',
  realize: 'осознать',
  rude: 'грубый',
  sentence: 'предложение (в тексте)',
  thin: 'тощий',
  slim: 'стройный',
  forget: 'забывать',
  get: 'получать, становиться',
  'get tired': 'устать',
  achieve: 'достигну',
  aim: 'цель',
  'think it over': 'обдумать это',
  'grateful to': 'благодарен',
  'sooner or later': 'рано или поздно',
  invent: 'изобретать',
  disappointed: 'расстроен',
  'hurry up': 'торопиться',
  lend: 'одолжить',
  borrow: 'занять (деньги)',
  authorities: 'власти',
  somehow: 'как-то',
  'devote to': 'уделять для',
  'reinvent the wheel': 'изобретать колесо',
  confuse: 'путать',
  'mix up': 'путать, мешать',
  'regret it': 'пожалеть об этом',
  measures: 'меры (н.р принимать меры)',
  punish: 'наказать',
  'apologize for': 'извиниться за',
  behave: 'вести (поведение)',
  'certainly, of course': 'конечно',
  'solution to': 'решение',
  dictionary: 'словарь',
  'lead to': 'приводить',
  interrupt: 'перебивать',
  pass: 'пройти, сдать',
  'take part, participate': 'принять участие',
  contest: 'состязание',
  influence: 'влиять',
  deny: 'отрицать'
}

export default function Home({
  words,
  isEngHide,
  clearWords,
  radioOption,
  changeLangMode,
  changeListMode,
  addWordsFromFile
}) {
  const handleChange = e => changeLangMode(e.target.checked)

  const handleChangeRadio = e => {
    if (e.target.checked) changeListMode(e.target.value)
  }

  const handleExportButton = () => {
    try {
      const wordsToFile = Object.keys(words).length ? words : mock
      const fileData = JSON.stringify(wordsToFile)
      const blob = new Blob([fileData], { type: 'text/json' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.download = 'words.json'
      link.href = url
      link.click()
    } catch (e) {
      console.error(e)
    }
  }

  const [mockLoaded, setMockLoaded] = useState(false)
  const handleMockButton = () => {
    addWordsFromFile(mock)
    setMockLoaded(true)
  }

  const handleClearStorage = clearWords

  return (
    <main className={['main', styles.home].join(' ')}>
      <div className={'container'}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.title}>Скрыть слова:</span>
            <Toggle
              checked={isEngHide}
              onChange={handleChange}
              falseText='Rus'
              trueText='Eng'
            />
          </li>
          <li className={styles.item}>
            <span className={styles.title}>Обрезать список:</span>
            <RadioGroup>
              {['all', '50', '25'].map(text => (
                <Radio
                  value={text}
                  text={text}
                  key={text}
                  checked={radioOption}
                  onChange={handleChangeRadio}
                />
              ))}
            </RadioGroup>
          </li>
          <li className={styles.item}>
            <span className={styles.title}>Скачать слова:</span>
            <Button onClick={handleExportButton}>Download</Button>
          </li>
          <li className={styles.item}>
            <span className={styles.title}>Очистить хранилище слов:</span>
            <Button onClick={handleClearStorage}>Clear</Button>
          </li>
          <li className={styles.item}>
            <Button size='fullsize' onClick={handleMockButton} disabled={mockLoaded}>
              { mockLoaded ? 'Готово' : 'Подгрузить пробный список слов'}
            </Button>
          </li>
        </ul>
      </div>
    </main>
  )
}
