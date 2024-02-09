import Card from "../Card/Card";
import * as S from "./Column.Styled";

export default function Column({ title, cardList }) {
    return (
        <S.MainColumn>
        <S.ColumnTitle>
          <p>{title}</p>
        </S.ColumnTitle>
        <S.Cards>
          {cardList.map((card) => <Card 
          topic = {card.theme} 
          title = {card.title}
          date = {card.date}
          key = {card.id}/> )}
        </S.Cards>
      </S.MainColumn>
    )
    }