export default {
    port: 1337,
    host: "localhost",
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshAccessTokenTtl: "15m",
    privateKey: `
    -----BEGIN RSA PRIVATE KEY-----
    MIICXAIBAAKBgQDy2Umkm3ioAHT18gceEMGkLln86BlIVbUPCjlHk1pYBBxCkjMf
    M/eeQQQgtzlkKDjr0IvAfHgsRF4C1TpTyLKTrFkzJey6HOnS07x0ScdXMdqD7SHV
    3DDPkKKN1JR+y4ixUr90kNf7ZIwlufr1sg/yzUFVl/hIkpRmdOctrYUgqQIDAQAB
    AoGBAJ+C9+tGL5dyTWDq65/k87xKsdL8BPdNTJMnbP5FnHbppEJZ03hwYvowzGxM
    zUarYNAL+G+jki/JbFLCCgDUd+5eGr12uM/C3IdXs5iZLkhUgd1pXz7OIDivdlty
    noZ4MdlrTF9qyEGmuK5CtYYvQ8O01cKwQBXkBwklJGQuhlEBAkEA+4rZl6FWPFHI
    kaGiryT+SPedrFBo+OBSnrCzUNEXmo2WmiZ04C432D7Z3gMEJ3gWLdC54lkxlZ6f
    9ifGbp3f4QJBAPcm/4obLlUkKWtINdkJYDa/w93F5KDbTcT/RUBatjdxf9MwGHnp
    Qdy6HtB/gXi9m4YFCTecr7ZJV2eA7yifeckCQHKlcFMp15IafF3T28AUDknXgee9
    pnp4U2+8fZ4CDs4EZnXPvUlIB2/qBYaovUX397PeBDrkCDN3XtTkgA5+qkECQFeg
    mBGbOX4uaBEFdTISRO6kZwmGVF1D4/roluEOSHS35R43ezYeIZ/kzXAXBQyODUoj
    FvWEtDfpIPgtmp3IjSECQDTXrSsThZPO+qAcViApY122fs/Mdbz6P/mfQA1ZEY0S
    O/Zdto8nu7ndzgLuZdHF1GRRUi2Xt52ZMlLabAUDaj0=
    -----END RSA PRIVATE KEY-----
    `,
    dbUri: "mongodb+srv://devUser:Expense@123!@expensecluster.ynlbe.mongodb.net/ExpenseCluster?retryWrites=true&w=majority"

}

