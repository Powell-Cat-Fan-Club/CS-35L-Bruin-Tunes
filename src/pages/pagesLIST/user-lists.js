import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import { Header } from '../../style';
import { 
  DivContainer, 
  ListCard, 
  ListCreator,
  ListContent,
  OptionChoice,
  OptionTitle,
  SideContainer, 
  SideContent,
  SubmitButton,
  Username,
  SideTitle
} from './listStyle';

const UserList = () => {
  const [artists, setArtists] = useState([]);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch (`http://localhost:5000/artists/`)
    .then ((res) =>res.json())
    .then((a) => {
      setArtists(a);
    })
  }, [artists]);

  useEffect(() => {
    fetch (`http://localhost:5000/lists/`)
    .then ((res) =>res.json())
    .then((a) => {
      setLists(a);
    })
  }, [lists]);


  const [form, setForm] = useState({
    username: "No username selected",
    userList: []
  });
  
  const navigate = useNavigate();
    
  function updateForm(value) {
    return setForm((prev) => {
      return {...prev, ...value};
    });
  }
    
  async function onSubmit(e) {
    const newList = {...form};
    
    await fetch("http://localhost:5000/lists/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify(newList),
    })

    .catch (error => {
      window.alert(error);
      return;
    });
    
    setForm({username:"No username selected", userList:new Array(artists.length).fill(null)});
    navigate("/userlist");
  }

  let displaySongs = (arr) =>
  {
    let theArr = [];

    for (let index = 1; index <= arr.length; index++)
    {
      theArr.push(
        <ListContent>
          {"Artist " + index + ": " + arr[index - 1]}
        </ListContent>
      )
    }
    return (<div>{theArr}</div>
    )
  }
    
  let displayLists = () => 
  {   
    return (
      <SideContent>
        {lists.map((list, index) => 
          <ListCard>
            <ListCreator> {list.username} </ListCreator>
            {displaySongs(list.userList)}
          </ListCard>
        )}
      </SideContent> 
    )
  }


  let arrayMutater = (val, index) => 
  {
    if (!val)
    val = "No artist selected";

    let cleanArr = form.userList;
    cleanArr[index - 1] = val;
    form.userList = cleanArr;
    updateForm({userList: cleanArr});
  }

  let displaySelector = () => 
  {    
    let myArr = [];
    for (let index = 1; index <= artists.length; index++)
    { 
      myArr.push(
        <fieldset>
          <OptionTitle> {"Artist #" + index} </OptionTitle>
          {artists.map((artist) => 
            <div>
              <OptionChoice>
                <input 
                  type="radio" 
                  id={artist.name} 
                  name={index} 
                  value={artist.name}
                  onChange={
                    (e) => arrayMutater(e.target.value, index)
                  } 
                />
                {artist.name}
              </OptionChoice>
            </div>
          )}
        </fieldset>
      )
    }   

    return (
      <SideContent>
        <form onSubmit={onSubmit}>
          <label>
            <Username 
              type="text" 
              name="name" 
              id="name" 
              placeholder="Your name"
              onChange={
                (e) => e.target.value !== "" ? 
                  updateForm({ username: e.target.value}) 
                : 
                  updateForm({username: "No username selected"})
              } 
            />
          </label>
          {myArr}
          <SubmitButton type="submit"> Submit </SubmitButton>
        </form>
      </SideContent>
    );
  }

  return (
    <DivContainer direction="column">
      <Header> List your top artists! </Header>
      <DivContainer direction="row">
        <SideContainer>
          <SideTitle color="#0AA1DD"> Create Your Own </SideTitle>
          {displaySelector()}
        </SideContainer>

        <SideContainer isRight={true} >
          <SideTitle isRight={true} color="#3C8DAD" > Other People's Lists </SideTitle>
          {displayLists()}
        </SideContainer> 
      </DivContainer>
    </DivContainer>
  )
}

export default UserList;

/*
        <SideContainer>
          <Header> Create Your Own </Header>
          {displaySelector()}
        </SideContainer>

        <SideContainer isRight={true} >
          <Header> Other People's Lists </Header>
          {displayLists()}
        </SideContainer> 
*/