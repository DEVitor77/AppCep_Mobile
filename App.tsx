import React, { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export default function App() {

  const [Cep, setCep] = useState("")
  const [Logradouro, setLogradouro] = useState("")
  const [Bairro, setBairro] = useState("")
  const [localidade, setlocalidadede] = useState("")
  const [uf, setUf] = useState("")



  return (
    <View style={styles.container}>

      <View style={styles.topbar}>
        <Text style={styles.title}> Buscador de Cep </Text>
      </View>

      <View style={styles.ContainerCep}>
        <TextInput
          style={{
            borderColor: "#000000", borderWidth: 2, width: 200,
            fontSize: 18, marginTop: 30, marginEnd: 20, borderRadius: 10,
            padding: 15
          }}
          value={Cep}
          onChangeText={(texto) => setCep(texto)}
          placeholder="Cep"
        />

        <TouchableOpacity style={styles.botaoBuscar}>
          <Text style={styles.textoBotaoBuscar}>Buscar</Text>
        </TouchableOpacity>

      </View>
      <TextInput
        style={styles.caixaTexto}
        value={Logradouro}
        onChangeText={(texto) => setLogradouro(texto)}
        placeholder="Logradouro" />
      <TextInput
        style={styles.caixaTexto}
        value={Bairro}
        onChangeText={(texto) => setBairro(texto)}
        placeholder="Bairro" />
      <TextInput
        style={styles.caixaTexto}
        value={localidade}
        onChangeText={(texto) => setlocalidadede(texto)}
        placeholder="Cidade" />
      <TextInput
        style={{
          borderColor: "#000000", borderWidth: 2, width: 100,
          fontSize: 18, marginTop: 10, marginEnd: 20, borderRadius: 10,
          marginHorizontal: 20, padding: 15
        }}
        value={uf}
        onChangeText={(texto) => setUf(texto)}
        placeholder="Estado" />



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  topbar: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#018786"
  },
  title: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    margin: 20
  },
  ContainerCep: {
    flexDirection: "row",
    height: 100,
    marginHorizontal: 20
  },
  botaoBuscar: {
    backgroundColor: "#018786",
    width: 120,
    height: 70,
    marginTop: 30,
    marginEnd: 20,
    borderRadius: 10,
    padding: 20
  },
  textoBotaoBuscar: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center"
  },
  caixaTexto: {
    borderColor: "#000000",
    borderWidth: 2,
    padding: 15,
    fontSize: 18,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 20


  }
})
