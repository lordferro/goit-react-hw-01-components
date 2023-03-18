import { NameTitle, ContainerDescription } from './ProfileDescription.styled';

export function ProfileDescription({ username, tag, location, avatar }) {
  return (
    <ContainerDescription>
      <img src={avatar} alt="User avatar" width={100}/>
      <NameTitle>{username}</NameTitle>
      <p>{tag}</p>
      <p>{location}</p>
    </ContainerDescription>
  );
}
