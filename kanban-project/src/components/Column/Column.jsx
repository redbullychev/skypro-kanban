import Card from "../Card/Card";
import * as S from "./Column.Styled";
import {format} from "date-fns";

export default function Column({ title, cardList }) {
    return (
        <S.MainColumn>
        <S.ColumnTitle>
          <p>{title}</p>
        </S.ColumnTitle>
        <S.Cards>
          {cardList.map((card) => <Card 
          topic = {card.topic} 
          title = {card.title}
          date = {format(card.date, "dd.MM.yy")}
          key = {card._id}
          id = {card._id}/> )}
        </S.Cards>
      </S.MainColumn>
    )
    }