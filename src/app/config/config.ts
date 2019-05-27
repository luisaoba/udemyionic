import { Injectable } from '@angular/core';

let config_key_name = 'config';

@Injectable()
export class ConfigProvider {
    private config = {
        showSlide:false,
        name: "",
        username: ""
    }
    constructor(){}

    // Recupera os dados de localStorage
    getConfigData(): any {
        return localStorage.getItem(config_key_name);
    }
    
    // Grava os dados no localStorage
    // Local Storage só aceita STRING
    // ?: indica que é opcional
    setConfigData(showSlide ?: boolean, name ?: string, username ?: string) {
        let config = {
            showSlide:false,
            name: "",
            username: ""
        };
        if (showSlide) {
            config.showSlide = showSlide;
        }
        if (name) {
            config.name = name;
        }
        if (username) {
            config.username = username;
        }
        localStorage.setItem(config_key_name,JSON.stringify(config));
    }
}