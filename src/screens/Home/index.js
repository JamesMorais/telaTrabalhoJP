import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../../../components";

const mercadoImg = require("../../../assets/grocery-shopping-rafiki.png");

export default function Home() {
    const [produto, setProduto] = useState('');
    const [cadastrado, setCadastrado] = useState(false);
    const [produtosSalvos, setProdutosSalvos] = useState([]);

    const limparCampoProduto = () => {
        setProduto('');
        setCadastrado(false);
        limparListaProdutos(); // Chamada para esvaziar a lista de produtos
    }

    const cadastrarProduto = () => {
        setCadastrado(true);
        setProdutosSalvos([...produtosSalvos, produto]); // Adiciona o produto aos produtos salvos
    }

    const limparListaProdutos = () => {
        setProdutosSalvos([]);
    }

    const handleChangeText = (text) => {
        setProduto(text);
        if (text === '') {
            setCadastrado(false);
        }
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={mercadoImg} style={styles.images} />
                    <Text style={[styles.text, { fontWeight: "bold" }]}>Cadastre o Produto:</Text>
                </View>
                <View>
                    <Text style={[styles.text, { fontWeight: "bold" }]}>Descrição: </Text>
                    <TextInput
                        style={styles.input}
                        value={produto}
                        onChangeText={handleChangeText}
                    />
                </View>
                <View style={{ paddingTop: 25, flexDirection: 'row', justifyContent: "space-between" }}>
                    <TouchableOpacity style={styles.button} onPress={limparCampoProduto}>
                        <Text style={{ color: 'white' }}>
                            LIMPAR
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={cadastrarProduto}>
                        <Text style={{ color: 'white' }}>
                            CADASTRAR
                        </Text>
                    </TouchableOpacity>
                </View>
                {cadastrado && produto !== '' && (
                    <View style={{alignItems: "center"}}>
                        <Text style={{padding:20}}>Produto(s) cadastrado(s):</Text>
                        {produtosSalvos.map((produtoSalvo, index) => (
                            <Text key={index}>{produtoSalvo}</Text>
                        ))}
                    </View>
                )}
            </View>
        </View>
    );
}
