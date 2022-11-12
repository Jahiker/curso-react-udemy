
describe('Prueba en <DemoComponent />', () => {  
    
    test('message1 must be equal to message2', () => {
    
        // 1. Inicializacion
        const msessage1 = "Hola Mundo";
    
        // 2. Estimulo
        const message2 = msessage1.trim();
    
        // 3. Observar el comportamiento
        expect(msessage1).toBe( message2 );
        
    })

})