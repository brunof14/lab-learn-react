import { useUserContext } from "../../hooks/useUserContext";
import {
  AvatarImg,
  FormUserData,
  Label,
  Input,
  LabelOpenFile,
  Container,
  InputFile,
} from "./styles";

export function AccountLogged() {
  const { name, at, avatarUrl, onChangeAt, onChangeName, onChangeUrl } =
    useUserContext();

  function handleChangeInputAvatar(e) {
    const [firstFileImg] = e.target.files;
    const url = window.URL.createObjectURL(firstFileImg);
    onChangeUrl(url);
  }

  function handleChangeName({ target }) {
    onChangeName(target.value);
  }

  function handleChangeAt({ target }) {
    onChangeAt(target.value);
  }

  return (
    <Container>
      <h1>Account</h1>
      <FormUserData>
        <div className="account-avatar">
          <AvatarImg src={avatarUrl} alt={name} />
          <LabelOpenFile htmlFor="avatar">Choose Image</LabelOpenFile>
          <InputFile
            type="file"
            id="avatar"
            accept="image/png, image/jpeg"
            onChange={handleChangeInputAvatar}
          />
        </div>

        <div className="account-details">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={handleChangeName}
            />
          </div>
          <div>
            <Label htmlFor="at">at</Label>
            <Input type="text" id="at" value={at} onChange={handleChangeAt} />
          </div>
        </div>
      </FormUserData>
    </Container>
  );
}
