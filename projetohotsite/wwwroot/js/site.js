const submit = () => {  
  let params = {
    Nome: $("#nome").val(),
    Email: $("#email").val(),
    Mensagem: $("#mensagem").val()
  }
  
  $.post('/Home/Cadastrar', params)
  .done( (data) => { 

    if(data.status == "ERRO"){
      alert(data.message)
    }
    else {
      alert("Envio concluído com sucesso!")
    }
  
  })

  .fail( () => { alert("Ocorreu um erro") })
}

const clearForm = () => $("#form").trigger("reset")



$("#form").on("submit", (e) => {
  e.preventDefault()
  
  submit()

  clearForm()
})

