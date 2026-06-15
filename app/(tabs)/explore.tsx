import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Explore
        </ThemedText>
      </ThemedView>
      <ThemedText>Este aplicativo inclui código de exemplo para ajudar você a começar.</ThemedText>
      <Collapsible title="File-based routing">
        <ThemedText>
          Este aplicativo tem duas telas:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          O arquivo de layout <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          configura o navegador de abas.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Saiba mais</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          Você pode abrir este projeto no Android, iOS e na web. Para abrir a versão web, pressione{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> no terminal enquanto o projeto está em execução.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <ThemedText>
          Para imagens estáticas, você pode usar os sufixos <ThemedText type="defaultSemiBold">@2x</ThemedText> e{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> para fornecer arquivos para
          diferentes densidades de tela
        </ThemedText>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Saiba mais</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          Este template tem suporte para modo claro e escuro. O hook{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> permite inspecionar
          o esquema de cores atual do usuário, e assim você pode ajustar as cores da interface conforme necessário.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Saiba mais</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          Este template inclui um exemplo de componente animado. O componente{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> utiliza
          a poderosa{' '}
          <ThemedText type="defaultSemiBold" style={{ fontFamily: Fonts.mono }}>
            react-native-reanimated
          </ThemedText>{' '}
          library para criar uma animação de onda fluida.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              O <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              componente provida um efeito parallax para a imagem do cabeçalho.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
