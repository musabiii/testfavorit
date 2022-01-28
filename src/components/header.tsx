import styled from "styled-components";

const HeaderBlock = styled.div`
  font-size: 20px;
  padding: 10px;
  border: 1px solid #eee;
  .search {
    display: flex;
    justify-content: space-between;
    input {
      border: none;
      border-bottom: 2px solid black;
    }
  }
  span {
    margin: 0 10px;
  }
`;

interface headerProps {}

const Header: React.FC<headerProps> = () => {
  return (
    <HeaderBlock className="head">
      <div className="search">
        <input type="text" placeholder="Поиск..." />
        <div className="acc">
          <span>Петров В. А.</span>
          <i className="fas fa-user-circle"></i>
        </div>
      </div>
    </HeaderBlock>
  );
};

export default Header;
