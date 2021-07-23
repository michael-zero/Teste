import React from 'react'
import { StyleSheet, View, Image, Pressable, Linking, Button} from 'react-native'
import {
    Avatar, 
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import {DadosContext} from '../DadosContext'
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors'
import fonts from '../config/fonts'
import {auth} from '../../config'
const DrawerContent = (props) => {
    
    const {setLogado, logado} = React.useContext(DadosContext);

    const [submenu, setSubmenu] = React.useState(false)
    const [submenuStra, setSubmenuStra] = React.useState(false)
    const supportedURL = "https://prodater.pmt.pi.gov.br/"
    


    const logout = async () => {
        await auth.signOut()
        setLogado(false)
    }

    const OpenURLButton = ({ url, children, style }) => {
        const handlePress = React.useCallback(async () => {
          // Checking if the link is supported for links with custom URL scheme.
          const supported = await Linking.canOpenURL(url);
          if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
          } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
          }
        }, [url]);
      
        return <Pressable onPress={handlePress}>
                <View style={{flexDirection: 'row',width: 100, alignItems: 'center', paddingVertical: 5}}>
                {children}
                </View>
            </Pressable>
        // <Button title={children} onPress={handlePress} />;
      };
      


    const ItemMenu = ({style, nome, cor, tamanho, titulo, mr, ...outrasProps}) => {
        return(
            <DrawerItem {...outrasProps} style={[style]}
            icon={() => (<Icon name={nome}
                color={cor}
                size={tamanho}
                style={mr ? {...mr}:{marginRight: -15}}
                
            />)}
            label={() => <Text style={[{fontSize: 15, fontFamily: fonts.titulo}]}>{titulo}</Text>}
            />
        )
    }

    // auth.onAuthStateChanged(u => {
    //     if(u){
    //         console.log(u.email)
    //     }
    // })

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'
                    }}>
                            <Avatar.Image
                                    style={{ backgroundColor: colors.fundoTeresinaDigital ,aspectRatio: 1, width: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 45}}
                                    source={require('../../assets/brasao.png')}
                                    size={50}
                            /> 
                              
                            
                            <View style={{marginLeft: 15, flexDirection:'column', marginTop: 5}}>
                               
                                <Title style={styles.title}>Teresinense Digital</Title>
                               
                                <View style={{height: 50, justifyContent: 'space-around'}}>
                                    
                                    {/* LINKS */}
                                    <OpenURLButton style={{color: colors.fundoTeresinaDigital}}  url="https://www.instagram.com/prodater.teresina/">
                                        <FontAwesome name="instagram" size={20} color={colors.azulClarinho} />
                                        <Text style={{fontFamily: fonts.texto, fontSize: 16, marginLeft: 5,color: colors.amarelo}}> instagram</Text>
                                    </OpenURLButton>
                                   
                                    <OpenURLButton style={{color: colors.fundoTeresinaDigital}}  url={supportedURL}>
                                        <Entypo name="link" size={20} color={colors.azulClarinho} />
                                        <Text style={{fontFamily: fonts.texto, fontSize: 16, marginLeft: 5,color: colors.amarelo}}>Site</Text>
                                    </OpenURLButton>

                                  

                                </View>
                               
                               
                            </View>

                        </View>

                    {/* <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>90</Paragraph>
                            <Caption style={styles.caption}>Seguidores</Caption>
                        </View>
                    </View> */}


                    </View>
                
                
                
                    <Drawer.Section style={[styles.drawerSection, {borderWidth: 0}]}>
                        {
                            logado ?
                        ( 
                            <>
                            {/* {style, nome, cor, tamanho, titulo, ...outrasProps} */}
                            <ItemMenu style={styles.caixaItem} nome="map" tamanho={25} cor={colors.fundoTeresinaDigital}
                            titulo="Mapa" onPress={() => props.navigation.navigate('Início')} />
                           

                            {/* Trânsito */}
                            <DrawerItem 
                            style={styles.caixaItem}
                            icon={({color, size}) => (
                                <Icon 
                                style={{marginRight: -15}}
                                name="traffic-light" 
                                // Cinza
                                color={colors.fundoTeresinaDigital}
                                size={25}
                                />
                            )}
                            // SUBMENU
                            label={() =><View style={{flexDirection: 'row', alignItems: 'center', width: 140, justifyContent: 'space-between'}}>
                                        <Text style={{fontSize: 15, fontFamily: fonts.titulo}}>Trânsito</Text>
                                        <AntDesign style={{marginLeft: 5}} name="caretdown" size={13} color="black"/>
                                        </View>}
                              onPress={() => setSubmenuStra(!submenuStra)}
                             /> 

                               {submenuStra &&  
                               <View style={styles.submenu}>
                               <DrawerItem 
                               style={[styles.caixaItem, {borderBottomColor: 'black'}]}
                               label={() => <Text style={{fontFamily: fonts.titulo, fontSize: 15, marginLeft: -15}}>Meus Veículos</Text>}
                               icon = {() => <MaterialCommunityIcons name="car" size={24} color={colors.fundoTeresinaDigital} />}
                               onPress={() => { setSubmenuStra(!submenuStra)
                                                props.navigation.navigate('Veiculos')}}
                               />

                                <ItemMenu style={styles.caixaItem} nome="file-edit" tamanho={25} cor={colors.fundoTeresinaDigital}
                                mr={{marginRight: -20}}
                                titulo="Infrações"
                                onPress={() => { setSubmenuStra(!submenuStra)
                                    props.navigation.navigate("Infracoes")}}
                                />

                            
                               </View>
                               }

                            <ItemMenu style={styles.caixaItem} nome="archive" tamanho={25} cor={colors.fundoTeresinaDigital}
                            titulo="Meus Processos" onPress={() => { 
                                props.navigation.navigate("Processos")}} />

                            {/* Serviços Urbanos */}
                            <DrawerItem 
                            style={styles.caixaItem}
                            icon={({color, size}) => (
                                <Icon 
                                style={{marginRight: -15}}
                                name="home-city" 
                                // Cinza
                                color={colors.fundoTeresinaDigital}
                                size={23}
                                />
                            )}
                            // SUBMENU
                            label={() =><View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Text style={{fontFamily: fonts.titulo, fontSize: 15}}>Serviços Urbanos</Text>
                                        <AntDesign style={{marginLeft: 5}} name="caretdown" size={13} color="black"/>
                                        </View>}
                              onPress={() => setSubmenu(!submenu)}
                             /> 

                               {submenu &&  
                               <View style={styles.submenu}>
                               <DrawerItem 
                               style={[styles.caixaItem, {borderBottomColor: 'black'}]}
                               label={() => <Text style={{fontFamily: fonts.titulo, fontSize: 15, marginLeft: -15}}>Solicitar Serviços</Text>}
                               icon = {() => <Foundation name="clipboard-pencil" size={24} color={colors.fundoTeresinaDigital} />}
                               onPress={() => { setSubmenu(!submenu)
                                   props.navigation.navigate('SolicitarLimpeza')}}
                               />

                                <ItemMenu style={styles.caixaItem} nome="truck" tamanho={25} cor={colors.fundoTeresinaDigital}
                                mr={{marginRight: -20}}
                                titulo="Coleta Domiciliar"
                                onPress={() => { setSubmenu(!submenu)
                                    props.navigation.navigate("Coleta")}}
                                />

                            
                               </View>
                               }

                        
                            {/* Fim Serviços Urbanos */}
                            <ItemMenu style={styles.caixaItem} nome="account-settings" tamanho={25} cor={colors.fundoTeresinaDigital}
                            titulo="Perfil" onPress={() => {props.navigation.navigate('Perfil')}}/>

                            <ItemMenu style={styles.caixaItem} nome="exit-to-app" tamanho={25} cor="red"
                            titulo="Sair" onPress={logout} />
                            </>
                         )
                        
                        :
                        <ItemMenu style={styles.caixaItem} nome="login" tamanho={25} cor={colors.fundoTeresinaDigital}
                        titulo="Login"  onPress={() => {props.navigation.navigate('Login')}} />


                        }


                  
                        {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('Home')}}
                        /> */}
                    </Drawer.Section>
                    
                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}

                </View>
            </DrawerContentScrollView>

            {/* Seção de fundo */}
            {/* <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    label='Sign out'
                    icon={
                        (({color, size}) => (
                            <Icon name='exit-to-app' size={size} color={color}/>
                        ))
                    }
                
                />
            </Drawer.Section> */}

        </View>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 20,
        // paddingVertical: 5
      },
      title: {
        fontSize: 16,
        marginTop: 3,
        color: 'black',
        fontFamily: fonts.titulo
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
      caixaItem: {
        //   borderBottomWidth: 1,
        //   borderColor: '#f4f4f4'
      },
      submenu: {
          marginLeft: 10,
          backgroundColor: '#F9F4FC',
      }
})