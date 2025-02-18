import dayjs from "dayjs";
import { AuthorImg, DetailsContainer } from "./styles";

interface IDetails {
  author: { profilePicture: string; name: string };
  createdAt: string;
}

const Details = ({ author, createdAt }: IDetails) => {
  return (
    <DetailsContainer>
      <AuthorImg src={author.profilePicture} />
      <div>
        <p>
          Written by: <span style={{ fontWeight: 600 }}>{author.name}</span>
        </p>
        <p>{dayjs(createdAt).format("MMM DD, YYYY")}</p>
      </div>
    </DetailsContainer>
  );
};
export default Details;
