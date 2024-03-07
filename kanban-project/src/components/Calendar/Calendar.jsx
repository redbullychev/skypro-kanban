
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

export default function Calendar({selectedDate, setSelectedDate}) {
 

  let footer = <p>Пожалуйста выберите дату.</p>;
  if (selectedDate) {
    footer = <p>Вы выбрали {format(selectedDate, 'PP', {locale: ru })}.</p>;
  }
  return (
    <DayPicker
      required
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      footer={footer}
    />
  );
}