import { UtilService } from './services/util.service';

export class Constant {
    public static protocol = UtilService.getFromLocalStorage("protocol");
    public static ip = UtilService.getFromLocalStorage("ip");
    public static port = UtilService.getFromLocalStorage("port");
    public static path = UtilService.getFromLocalStorage("path");
    static baseUrl = Constant.protocol + "://" + Constant.ip + ":" + Constant.port + Constant.path
    public static company = UtilService.getFromLocalStorage("company");
    public static contextSuccesMessage = "Contexte mis à jour avec succes";
    public static applicationJson = "application/json";
    public static pathRegex = /^(([/]{1})([a-zA-Z0-9{}]{0,})){0,}$/;
    public static billerStorage = "biller";
    public static debtStorage = "debt";
}