import { Module } from '@nestjs/common';
import { UsuarioModule } from './Ususarios/usuario.module';
import { UsuarioRepository } from './Ususarios/usuario.repository';


@Module({
  imports: [UsuarioModule],
  providers: [UsuarioRepository]
})
export class AppModule {}
