import { Statistics } from "../Statistics/Statistics";

export const Profile = () => {
  return (
    <>
      <div class="profile">
        <div class="description">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="User avatar"
            class="avatar"
          />
          <p class="name">Petra Marica</p>
          <p class="tag">@pmarica</p>
          <p class="location">Salvador, Brasil</p>
        </div>
        <Statistics />
      </div>
    </>
  );
};
