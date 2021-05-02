﻿/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.3.1.0 (NJsonSchema v9.14.1.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export module RFApi {

export class SourceService {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * Gets the source.
     * @param sourceId The source identifier.
     */
    getSource(sourceId: number): Promise<RFApiResult<SourceDto | null>> {
        let url_ = this.baseUrl + "/api/Source/{sourceId}";
        if (sourceId === undefined || sourceId === null)
            throw new Error("The parameter 'sourceId' must be defined.");
        url_ = url_.replace("{sourceId}", encodeURIComponent("" + sourceId)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetSource(_response);
        });
    }

    protected processGetSource(response: Response): Promise<RFApiResult<SourceDto | null>> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? SourceDto.fromJS(resultData200) : <any>null;
            return new RFApiResult(status, _headers, result200);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<RFApiResult<SourceDto | null>>(new RFApiResult(status, _headers, <any>null));
    }

    /**
     * Deletes the source.
     * @param sourceId The source identifier.
     */
    deleteSource(sourceId: number): Promise<RFApiResult<boolean>> {
        let url_ = this.baseUrl + "/api/Source/{sourceId}";
        if (sourceId === undefined || sourceId === null)
            throw new Error("The parameter 'sourceId' must be defined.");
        url_ = url_.replace("{sourceId}", encodeURIComponent("" + sourceId)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "DELETE",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDeleteSource(_response);
        });
    }

    protected processDeleteSource(response: Response): Promise<RFApiResult<boolean>> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return new RFApiResult(status, _headers, result200);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<RFApiResult<boolean>>(new RFApiResult(status, _headers, <any>null));
    }

    /**
     * Gets the source.
     * @param sourceId The source identifier.
     */
    getSourceWithTemplates(sourceId: number): Promise<RFApiResult<SourceDto | null>> {
        let url_ = this.baseUrl + "/api/Source/sourceWithTemplates/{sourceId}";
        if (sourceId === undefined || sourceId === null)
            throw new Error("The parameter 'sourceId' must be defined.");
        url_ = url_.replace("{sourceId}", encodeURIComponent("" + sourceId)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetSourceWithTemplates(_response);
        });
    }

    protected processGetSourceWithTemplates(response: Response): Promise<RFApiResult<SourceDto | null>> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? SourceDto.fromJS(resultData200) : <any>null;
            return new RFApiResult(status, _headers, result200);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<RFApiResult<SourceDto | null>>(new RFApiResult(status, _headers, <any>null));
    }

    /**
     * Gets the source list paged.
     * @param options The options.
     */
    getSourceListPaged(options: PagingOptionsDto): Promise<RFApiResult<PagedSetDtoOfSourceDto | null>> {
        let url_ = this.baseUrl + "/api/Source/getSourcePaged";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(options);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetSourceListPaged(_response);
        });
    }

    protected processGetSourceListPaged(response: Response): Promise<RFApiResult<PagedSetDtoOfSourceDto | null>> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedSetDtoOfSourceDto.fromJS(resultData200) : <any>null;
            return new RFApiResult(status, _headers, result200);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<RFApiResult<PagedSetDtoOfSourceDto | null>>(new RFApiResult(status, _headers, <any>null));
    }

    /**
     * Adds a source to database.
     * @param source The source.
     */
    insertSource(source: SourceDto): Promise<RFApiResult<boolean>> {
        let url_ = this.baseUrl + "/api/Source";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(source);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processInsertSource(_response);
        });
    }

    protected processInsertSource(response: Response): Promise<RFApiResult<boolean>> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return new RFApiResult(status, _headers, result200);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<RFApiResult<boolean>>(new RFApiResult(status, _headers, <any>null));
    }

    /**
     * Updates the source.
     * @param source The source.
     */
    updateSource(source: SourceDto): Promise<RFApiResult<boolean>> {
        let url_ = this.baseUrl + "/api/Source";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(source);

        let options_ = <RequestInit>{
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdateSource(_response);
        });
    }

    protected processUpdateSource(response: Response): Promise<RFApiResult<boolean>> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return new RFApiResult(status, _headers, result200);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<RFApiResult<boolean>>(new RFApiResult(status, _headers, <any>null));
    }
}

export class StatementService {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * Uploads the statement.
     * @param file (optional) The file.
     * @param templateId (optional) The template to parse the file
     * @param paymentId (optional) The payment used to process the file
     */
    uploadStatement(file: FileParameter | null | undefined, templateId: number | undefined, paymentId: number | undefined): Promise<RFApiResult<IEnumerable | null>> {
        let url_ = this.baseUrl + "/api/Statement/uploadStatement";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = new FormData();
        if (file !== null && file !== undefined)
            content_.append("file", file.data, file.fileName ? file.fileName : "file");

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "templateId": templateId !== undefined && templateId !== null ? "" + templateId : "", 
                "paymentId": paymentId !== undefined && paymentId !== null ? "" + paymentId : "", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUploadStatement(_response);
        });
    }

    protected processUploadStatement(response: Response): Promise<RFApiResult<IEnumerable | null>> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 400) {
            return response.text().then((_responseText) => {
            let result400: any = null;
            let resultData400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData400) {
                result400 = {} as any;
                for (let key in resultData400) {
                    if (resultData400.hasOwnProperty(key))
                        result400![key] = resultData400[key] !== undefined ? resultData400[key] : [];
                }
            }
            return throwException("A server error occurred.", status, _responseText, _headers, result400);
            });
        } else if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? IEnumerable.fromJS(resultData200) : <any>null;
            return new RFApiResult(status, _headers, result200);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<RFApiResult<IEnumerable | null>>(new RFApiResult(status, _headers, <any>null));
    }
}

export class TemplateService {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * Gets the template by Id.
     * @param templateId The template identifier.
     */
    getTemplate(templateId: number): Promise<RFApiResult<TemplateDto | null>> {
        let url_ = this.baseUrl + "/api/Template/{templateId}";
        if (templateId === undefined || templateId === null)
            throw new Error("The parameter 'templateId' must be defined.");
        url_ = url_.replace("{templateId}", encodeURIComponent("" + templateId)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTemplate(_response);
        });
    }

    protected processGetTemplate(response: Response): Promise<RFApiResult<TemplateDto | null>> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? TemplateDto.fromJS(resultData200) : <any>null;
            return new RFApiResult(status, _headers, result200);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<RFApiResult<TemplateDto | null>>(new RFApiResult(status, _headers, <any>null));
    }

    /**
     * Deletes the template.
     * @param templateId The template identifier.
     */
    deleteTemplate(templateId: number): Promise<RFApiResult<boolean>> {
        let url_ = this.baseUrl + "/api/Template/{templateId}";
        if (templateId === undefined || templateId === null)
            throw new Error("The parameter 'templateId' must be defined.");
        url_ = url_.replace("{templateId}", encodeURIComponent("" + templateId)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "DELETE",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDeleteTemplate(_response);
        });
    }

    protected processDeleteTemplate(response: Response): Promise<RFApiResult<boolean>> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return new RFApiResult(status, _headers, result200);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<RFApiResult<boolean>>(new RFApiResult(status, _headers, <any>null));
    }

    /**
     * Gets the source templates paged.
     * @param options The options.
     * @param sourceIdHeader (optional) The sourceIdentifier.
     * @param sourceIdPath The sourceIdentifier.
     */
    getTemplatesBySourcePaged(options: PagingOptionsDto, sourceIdHeader: number | undefined, sourceIdPath: string): Promise<RFApiResult<PagedSetDtoOfTemplateDto | null>> {
        let url_ = this.baseUrl + "/api/Template/getTemplatesPaged/{sourceId}";
        if (sourceIdPath === undefined || sourceIdPath === null)
            throw new Error("The parameter 'sourceIdPath' must be defined.");
        url_ = url_.replace("{sourceId}", encodeURIComponent("" + sourceIdPath)); 
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(options);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "sourceId": sourceIdHeader !== undefined && sourceIdHeader !== null ? "" + sourceIdHeader : "", 
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTemplatesBySourcePaged(_response);
        });
    }

    protected processGetTemplatesBySourcePaged(response: Response): Promise<RFApiResult<PagedSetDtoOfTemplateDto | null>> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedSetDtoOfTemplateDto.fromJS(resultData200) : <any>null;
            return new RFApiResult(status, _headers, result200);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<RFApiResult<PagedSetDtoOfTemplateDto | null>>(new RFApiResult(status, _headers, <any>null));
    }

    /**
     * Adds a template to database.
     * @param template The template to insert.
     */
    insertTemplate(template: TemplateDto): Promise<RFApiResult<boolean>> {
        let url_ = this.baseUrl + "/api/Template";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(template);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processInsertTemplate(_response);
        });
    }

    protected processInsertTemplate(response: Response): Promise<RFApiResult<boolean>> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return new RFApiResult(status, _headers, result200);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<RFApiResult<boolean>>(new RFApiResult(status, _headers, <any>null));
    }

    /**
     * Updates the template.
     * @param template The template.
     */
    updateTemplate(template: TemplateDto): Promise<RFApiResult<boolean>> {
        let url_ = this.baseUrl + "/api/Template";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(template);

        let options_ = <RequestInit>{
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdateTemplate(_response);
        });
    }

    protected processUpdateTemplate(response: Response): Promise<RFApiResult<boolean>> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return new RFApiResult(status, _headers, result200);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<RFApiResult<boolean>>(new RFApiResult(status, _headers, <any>null));
    }
}

export class SourceDto implements ISourceDto {
    id?: number | undefined;
    name?: string | undefined;
    templates?: TemplateDto[] | undefined;

    constructor(data?: ISourceDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["Id"];
            this.name = data["Name"];
            if (data["Templates"] && data["Templates"].constructor === Array) {
                this.templates = [] as any;
                for (let item of data["Templates"])
                    this.templates!.push(TemplateDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): SourceDto {
        data = typeof data === 'object' ? data : {};
        let result = new SourceDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id;
        data["Name"] = this.name;
        if (this.templates && this.templates.constructor === Array) {
            data["Templates"] = [];
            for (let item of this.templates)
                data["Templates"].push(item.toJSON());
        }
        return data; 
    }
}

export interface ISourceDto {
    id?: number | undefined;
    name?: string | undefined;
    templates?: TemplateDto[] | undefined;
}

export class TemplateDto implements ITemplateDto {
    id!: number;
    sourceId?: number | undefined;
    name?: string | undefined;
    definition?: string | undefined;

    constructor(data?: ITemplateDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["Id"];
            this.sourceId = data["SourceId"];
            this.name = data["Name"];
            this.definition = data["Definition"];
        }
    }

    static fromJS(data: any): TemplateDto {
        data = typeof data === 'object' ? data : {};
        let result = new TemplateDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id;
        data["SourceId"] = this.sourceId;
        data["Name"] = this.name;
        data["Definition"] = this.definition;
        return data; 
    }
}

export interface ITemplateDto {
    id: number;
    sourceId?: number | undefined;
    name?: string | undefined;
    definition?: string | undefined;
}

export class PagedSetDtoOfSourceDto implements IPagedSetDtoOfSourceDto {
    result?: SourceDto[] | undefined;
    total!: number;

    constructor(data?: IPagedSetDtoOfSourceDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["Result"] && data["Result"].constructor === Array) {
                this.result = [] as any;
                for (let item of data["Result"])
                    this.result!.push(SourceDto.fromJS(item));
            }
            this.total = data["Total"];
        }
    }

    static fromJS(data: any): PagedSetDtoOfSourceDto {
        data = typeof data === 'object' ? data : {};
        let result = new PagedSetDtoOfSourceDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.result && this.result.constructor === Array) {
            data["Result"] = [];
            for (let item of this.result)
                data["Result"].push(item.toJSON());
        }
        data["Total"] = this.total;
        return data; 
    }
}

export interface IPagedSetDtoOfSourceDto {
    result?: SourceDto[] | undefined;
    total: number;
}

export class PagingOptionsDto implements IPagingOptionsDto {
    currentIndex!: number;
    howManyPerPage!: number;
    propertyToOrderBy?: string | undefined;

    constructor(data?: IPagingOptionsDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.currentIndex = data["CurrentIndex"];
            this.howManyPerPage = data["HowManyPerPage"];
            this.propertyToOrderBy = data["PropertyToOrderBy"];
        }
    }

    static fromJS(data: any): PagingOptionsDto {
        data = typeof data === 'object' ? data : {};
        let result = new PagingOptionsDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["CurrentIndex"] = this.currentIndex;
        data["HowManyPerPage"] = this.howManyPerPage;
        data["PropertyToOrderBy"] = this.propertyToOrderBy;
        return data; 
    }
}

export interface IPagingOptionsDto {
    currentIndex: number;
    howManyPerPage: number;
    propertyToOrderBy?: string | undefined;
}

export abstract class IEnumerable implements IIEnumerable {

    constructor(data?: IIEnumerable) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
    }

    static fromJS(data: any): IEnumerable {
        data = typeof data === 'object' ? data : {};
        throw new Error("The abstract class 'IEnumerable' cannot be instantiated.");
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        return data; 
    }
}

export interface IIEnumerable {
}

export class PagedSetDtoOfTemplateDto implements IPagedSetDtoOfTemplateDto {
    result?: TemplateDto[] | undefined;
    total!: number;

    constructor(data?: IPagedSetDtoOfTemplateDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["Result"] && data["Result"].constructor === Array) {
                this.result = [] as any;
                for (let item of data["Result"])
                    this.result!.push(TemplateDto.fromJS(item));
            }
            this.total = data["Total"];
        }
    }

    static fromJS(data: any): PagedSetDtoOfTemplateDto {
        data = typeof data === 'object' ? data : {};
        let result = new PagedSetDtoOfTemplateDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.result && this.result.constructor === Array) {
            data["Result"] = [];
            for (let item of this.result)
                data["Result"].push(item.toJSON());
        }
        data["Total"] = this.total;
        return data; 
    }
}

export interface IPagedSetDtoOfTemplateDto {
    result?: TemplateDto[] | undefined;
    total: number;
}

export class RFApiResult<TResult> {
    status: number;
    headers: { [key: string]: any; };
    result: TResult;
        
    constructor(status: number, headers: { [key: string]: any; }, result: TResult) 
    {
        this.status = status;
        this.headers = headers;
        this.result = result;
    }
}

export interface FileParameter {
    data: any;
    fileName: string;
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if(result !== null && result !== undefined)
        throw result;
    else
        throw new SwaggerException(message, status, response, headers, null);
}

}