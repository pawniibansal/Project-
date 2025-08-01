@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body {
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to left top, #bb47d8, #e0ae24);

}

h1{
    text-align: center;
    font-weight: bold;
    color: #333;
}
.wrapper {
  width: 450px;
  padding: 25px;
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.06);
}
.wrapper .gradient-box {
  height: 220px;
  width: 100%;
  border-radius: 7px;
  background: linear-gradient(to left top, #bb47d8, #e0ae24);
}
.wrapper .row {
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
}
.options p {
  font-size: 1.1rem;
  margin-bottom: 8px;
}
.row :where(.column, button) {
  width: calc(100% / 2 - 12px);
}
.options .select-box {
  border-radius: 5px;
  padding: 10px 15px;
  border: 1px solid #aaa;
}
.select-box select {
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.12rem;
  background: none;
}
.options .palette {
  margin-left: 60px;
}
.palette input {
  height: 41px;
  width: calc(100% / 2 - 20px);
}
.palette input:last-child {
  margin-left: 6px;
}
.wrapper textarea {
  width: 100%;
  color: #333;
  font-size: 1.05rem;
  resize: none;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.buttons button {
  padding: 15px 0;
  border: none;
  outline: none;
  color: #fff;
  margin: 0 0 -15px;
  font-size: 1.09rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;
}
.buttons .refresh {
  background: #6C757D;
}
.buttons .refresh:hover {
  background: #5f666d;
}
.buttons .copy {
  background: #8A6CFF;
}
.buttons .copy:hover {
  background: #704dff;
}

@media screen and (max-width: 432px) {
  .wrapper {
    padding: 25px 20px;
  }
  .row :where(.column, button) {
    width: calc(100% / 2 - 8px);
  }
  .options .select-box {
    padding: 8px 15px;
  }
  .options .palette  {
    margin-left: 40px;
  }
  .options .colors {
    display: flex;
    justify-content: space-between;
  }
  .palette input {
    width: calc(100% / 2 - 5px);
  }
  .palette input:last-child {
    margin-left: 0;
  }
}
