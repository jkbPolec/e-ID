import {Technicican} from './technician.model';

export interface ApiResponse {
    NazwaDealera: string;
    UlicaDealera: string;
    DomDealera: string;
    MieszkanieDealera: string;
    MiastoDealera: string;
    TelefonDealera: string;
    NIPDealera: string;
    KodPocztowyDealera: string;
    PocztaDealera: string;
    NowySAP: string;
    StarySAP: string;
    KanalSprzedazy: string;
    NieAktywny: string;
    Handlowiec: string;
    HandlowiecTelefon: string;
    HandlowiecKomorka: string;
    HandlowiecEmail: string;
    RMS: string;
    RMSTelefon: string;
    RMSKomorka: string;
    RMSEmail: string;
    Dealer: string;
    Dystrybutor: string;
    listaSerwisantow: Technicican[];
    WersjaAPI: string;
}
