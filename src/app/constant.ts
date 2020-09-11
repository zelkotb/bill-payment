import { UtilService } from './services/util.service';

export class Constant {
    public static protocol = "protocol";
    public static ip = "ip";
    public static port = "port";
    public static path = "path";
    public static url = "url";
    public static company: string = "company";
    public static contextSuccesMessage = "Contexte mis à jour avec succes";
    public static applicationJson = "application/json";
    public static pathRegex = /^(([/]{1})([a-zA-Z0-9{}]{0,})){0,}$/;
    public static stringRegex = /^[a-zA-Z0-9_-]*$/;
    public static reelNumberRegex = /^(([0-9]+[.|,][0-9]+)|([0-9]+))*$/
    public static entierNumberRegex = /^([0-9]+)*$/
    public static billerStorage = "biller";
    public static debtStorage = "debt";
    public static fieldStorage = "field";
    public static pathVariableErrorMessage = "le nombre de variable de la requete depasse le nécessaire";
    public static hintMondatoryMessage = "* obligatoire";
    public static hintOptionalMessage = "* facultatif";
}